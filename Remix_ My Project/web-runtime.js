(function () {
  var activeLoops = new Set();
  var icons = new Map();

  document.querySelectorAll("img[data-canonical-image-url]").forEach(function (image) {
    icons.set(image.dataset.canonicalImageUrl, image.src);
  });

  function getElement(id) {
    var element = document.getElementById(id);
    if (!element) {
      throw new Error("No app element found with id: " + id);
    }
    return element;
  }

  window.setScreen = function (id) {
    var nextScreen = getElement(id);
    document.querySelectorAll("#divApplab > .screen").forEach(function (screen) {
      screen.style.display = screen === nextScreen ? "block" : "none";
    });
  };

  window.onEvent = function (id, eventName, handler) {
    getElement(id).addEventListener(eventName, handler);
  };

  window.getText = function (id) {
    var element = getElement(id);
    return "value" in element ? element.value : element.textContent;
  };

  window.setText = function (id, text) {
    var element = getElement(id);
    if ("value" in element) {
      element.value = text;
    } else {
      element.textContent = text;
    }
  };

  window.setProperty = function (id, property, value) {
    var element = getElement(id);
    var styleProperties = {
      "background-color": "backgroundColor",
      height: "height",
      width: "width",
      x: "left",
      y: "top"
    };
    var styleProperty = styleProperties[property];
    if (!styleProperty) {
      throw new Error("Unsupported style property: " + property);
    }
    element.style[styleProperty] =
      typeof value === "number" && property !== "background-color"
        ? value + "px"
        : value;
  };

  window.setImageURL = function (id, url) {
    var image = getElement(id);
    if (url.indexOf("icon://") === 0) {
      if (!icons.has(url)) {
        throw new Error("No exported image is available for icon: " + url);
      }
      image.src = icons.get(url);
      return;
    }
    image.src =
      url.indexOf("://") === -1 &&
      url.indexOf("data:") !== 0 &&
      url.indexOf("/") === -1
        ? "assets/" + url
        : url;
  };

  window.showElement = function (id) {
    getElement(id).style.display = "";
  };

  window.hideElement = function (id) {
    getElement(id).style.display = "none";
  };

  window.appendItem = function (list, item) {
    list.push(item);
    return list;
  };

  window.randomNumber = function (minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  };

  window.rgb = function (red, green, blue) {
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  };

  window.timedLoop = function (milliseconds, callback) {
    var loop = window.setInterval(callback, milliseconds);
    activeLoops.add(loop);
    return loop;
  };

  window.stopTimedLoop = function () {
    activeLoops.forEach(function (loop) {
      window.clearInterval(loop);
    });
    activeLoops.clear();
  };

  window.playSound = function (source) {
    var audio = new Audio(source);
    audio.play().catch(function (error) {
      console.warn("Could not play sound:", error);
    });
  };
})();
