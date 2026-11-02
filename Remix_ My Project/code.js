var usernames=["guest"];
var passwords=["guest"];
var passapp="";
var userapp="";
var username="";
var password="";

var lives=3;
var score=0;
var highscore=0;
var impossible=0;
var highscoreList=[];

var hardmodeclicked=0;
var colors=0;
var sizes=0;

var images = [
  "assets/tardar.jpeg",
  "https://cdn2.thecatapi.com/images/NZpO4pU56M.jpg"
];

var badstartx=165;
var badstarty=290;
var goodstartx=35;
var goodstarty=155;

setScreen("lockScreen");





onEvent("BadImage", "mouseover", function( ) {
  // found in the code.org library
	if (lives==1){
   lives--;
   if (score>=highscore){
     highscore=score;
   }
   else if (score<highscore){
     console.log("you didnt get a highscore");
   }
   else{"error?"}
   setScreen("gameOver");
   setText("gameoverText","your score was "+ score+"\n"+"your highscore is " +highscore);
   
	
 }
	else if (lives>1){
   lives--;
   setText("livesTextbox","Lives: " + lives);
   
	}
});
onEvent("goodImage","mouseover",function(){
  //found in the code.org library
  score++;
  setText("scoreTextbox","Score: " + score);
});
onEvent("home", "click", function( ) {
  // image from code.org icon library
  home();
	
});
onEvent("createPass", "click", function( ) {
userapp = getText("usernameCreate");
passapp= getText("passwordCreate");
appendItem(usernames,userapp);
appendItem(passwords,passapp);
setScreen("lockScreen");
});
onEvent("home1", "click", function( ) {
  // image from code.org icon library
	home();
});

function home(){
  if (score > highscore) {
    highscore = score;
  }
  appendItem(highscoreList,highscore);
  stopTimedLoop();
  setScreen("lockScreen");
  score=0;
  lives=3;
  speed2=100;
  badstartx=165;
  badstarty=290;
  goodstartx=35;
  goodstarty=155;
  setText("scoreTextbox","Score: " + score);
  setText("livesTextbox","Lives: " + lives);
  setProperty("gameScreen","background-color","white");
  setProperty("BadImage","width",100);
  setProperty("BadImage","height",100);
  setProperty("goodImage","width",100);
  setProperty("goodImage","height",100);
  setImageURL("goodImage","icon://fa-smile-o");
  setImageURL("BadImage","icon://fa-frown-o");
  moveimage();
  showElement("BadImage");
  showElement("goodImage");
	colors=0;
	sizes=0;
	hardmodeclicked=0;
	impossible=0;
	hideElement("clickhelp");
	hideElement("arrowdown");
	hideElement("forgotpasswordbutton");
	// sound from code.org library
	playSound("assets/category_digital/coin_3.mp3");
}

onEvent("login", "click", function( ) {
  
  username=getText("usernameinput");
password=getText("passwordinput");
check(username,password);
  timedLoop(80,function(){
  move();
  moveimage();
});
// sound from code.org sound library
playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3");
for (var l=0;l<highscoreList.length;l++){
  if (highscoreList[l]>=highscoreList[l+1]){
    highscore=highscoreList[l];
  }else if(highscoreList[l]<highscoreList[l+1]){
    highscore=highscoreList[l+1];
  }
  
}

lives=3;
setText("livesTextbox","Lives: " + lives);
setText("scoreTextbox","Score: "+ 0);
});

function check(user,pass){
  for (var i=0;i<usernames.length;i++){
    if (user=="secret"&&pass=="menu"){
      setScreen("secret");
    }
 else if (usernames[i]==user&&passwords[i]==pass){
    setScreen("gameScreen");
  }
  
  else {
    console.log("no username found");
    // maybe add forgot password type username style thing here
    showElement("forgotpasswordbutton");
    // image from the code.org icon set
    showElement("arrowdown");
    showElement("clickhelp");
    // sound from code.org sound library
    playSound("assets/category_alerts/retro_game_alert_2.mp3");
  }
}}

function move(){
  badstartx = badstartx + randomNumber(-10,10);
  badstarty= badstarty + randomNumber(-10,10);
  goodstartx = goodstartx + randomNumber(-10,10);
  goodstarty = goodstarty + randomNumber(-10,10);
  if(badstartx>=310||badstartx<=10){
    badstartx=150;
  } if(goodstartx>=310||goodstartx<=10){
    goodstartx=150;
  }if(badstarty>=380||badstarty<=50){
    badstarty=250;
  }if(goodstarty>=380||goodstarty<=50){
    goodstarty=250;
  }
  
}
function moveimage(){
  setProperty("BadImage","x",badstartx);
  setProperty("BadImage","y",badstarty);
  setProperty("goodImage","x",goodstartx);
  setProperty("goodImage","y",goodstarty);
}

onEvent("sendcreatelogin", "click", function( ) {
setScreen("CreateLogin");
// sound from code.org sound library
playSound("assets/category_app/app_button_2.mp3");
});

onEvent("restart", "click", function( ) {
lives=3;
score=0;
setText("livesTextbox","Lives: " + lives);
setText("scoreTextbox","Score: " + 0);
// sound from code.org sound library
playSound("assets/category_board_games/card_fan_2.mp3");
if (hardmodeclicked==1){
timedLoop(100,function(){
  move();
  moveimage();
});}
else if (impossible==1){
  timedLoop(10,function(){
  move();
  moveimage();});
  lives=1;
}
setScreen("gameScreen");

});
onEvent("question", "click", function( ) {
  // image from code.org icon list
setScreen("questionhome");
});
onEvent("home3", "click", function( ) {
  // the image is from the code.org icon list
	home();
});
onEvent("questioncreate", "click", function( ) {
	// image from code.org icon list
	setScreen("questionCreate");
});
onEvent("home4", "click", function( ) {
  // the image is fromt the code.org icon list
	home();
});
onEvent("hardmodeButton", "click", function( ) {
stopTimedLoop();
timedLoop(120,function(){
  moveimage2();
  moveimage();
});
hardmodeclicked=1;
  
setScreen("gameScreen");
});

function moveimage2(){
  badstartx = goodstartx + randomNumber(-60,60);
  badstarty= goodstarty + randomNumber(-60,60);
  goodstartx = goodstartx + randomNumber(-60,60);
  goodstarty = goodstarty + randomNumber(-60,60);
  if(badstartx>=310||badstartx<=10){
    badstartx=150;
  } if(goodstartx>=310||goodstartx<=10){
    goodstartx=150;
  }if(badstarty>=380||badstarty<=50){
    badstarty=250;
  }if(goodstarty>=380||goodstarty<=50){
    goodstarty=250;
  }
  
}
onEvent("forgotpasswordbutton", "click", function( ) {
	setScreen("forgotenpasword");
});
onEvent("forgotinput", "input", function( ) {
	for(var u=0;u<usernames.length;u++){
	  if (usernames[u]==getText("forgotinput") ){
	    setText("forgotenoutput",passwords[u]);
	  }
	  else if (usernames[u]!=getText("forgotinput")){
	    setText("forgotenoutput","");
	  }
	}
});
onEvent("home2", "click", function( ) {
// image from code.org icon list
home();
});
onEvent("originalimages", "click", function( ) {
  // image from code.org icon set
setImageURL("goodImage","icon://fa-smile-o");
//image from code.org icon list
setImageURL("BadImage","icon://fa-frown-o");
});
onEvent("setcats", "click", function( ) {
  // image from cats data set from code.org sourced https://thecatapi.com
setImageURL("goodImage","https://cdn2.thecatapi.com/images/NZpO4pU56M.jpg");
// found on https://www.grumpycats.com/about website
setImageURL("BadImage","assets/tardar.jpeg");
});
onEvent("dogs", "click", function( ) {
  // image from https://ro.pinterest.com/pin/813603488916406405/ 
setImageURL("goodImage","assets/fe2ffc854b684e096b9e3b0d53b76e66.jpg");
// image from https://www.reddit.com/r/Overgrowth/comments/331gxj/an_angry_dog_standing_upright_xpost_from/?rdt=47633 
setImageURL("BadImage","assets/images.jpg");
});


onEvent("questionforgot", "click", function( ) {
setScreen("forgotenlogin");
});
onEvent("backarrow", "click", function( ) {
	setScreen("forgotenpasword");
});
onEvent("lemon&lime", "click", function( ) {
  // image from https://www.vectorstock.com/royalty-free-vector/color-kawaii-happy-lemon-icon-vector-13615411
setImageURL("goodImage","download-(3).png");
// image from https://www.superstock.com/asset/angry-lime-illustration-vector-white-background/5507-44735001
setImageURL("BadImage","download-(18).jpg");
});
onEvent("colors2", "click", function( ) {
  lives=3;
  score=0;
  
  timedLoop(80,function(){
  move();
  moveimage();
});


timedLoop(700,function(){
  setProperty("gameScreen","background-color",rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
});

colors=1;
setScreen("gameScreen");
});
onEvent("size", "click", function( ) {

  timedLoop(80,function(){
  move();
  moveimage();
});
timedLoop(1000,function(){
  setProperty("BadImage","width",randomNumber(30,150));
  setProperty("BadImage","height",randomNumber(30,150));
  setProperty("goodImage","width",randomNumber(30,150));
  setProperty("goodImage","height",randomNumber(30,150));
});
sizes=1;
setScreen("gameScreen");

});






onEvent("randomizeim", "click", function( ) {
  timedLoop(1000,function(){
    // image from the code.org cats list
    	setImageURL("BadImage",images[randomNumber(0,images.length-1)]);
    	// images from the code.org cats data set
    		setImageURL("goodImage",images[randomNumber(0,images.length-1)]);
  });
	setScreen("gameScreen");
});
onEvent("home33", "click", function( ) {
	home();
});
onEvent("colors","click",function(){
  setScreen("warningscreen");
});
onEvent("impossible", "click", function( ) {
stopTimedLoop();
timedLoop(60,function(){
  moveimage2();
  moveimage();
});
impossible=1;
setScreen("gameScreen");
});


onEvent("disapear", "click", function( ) {
	timedLoop(600,function(){
	  var rn1= randomNumber(1,2);
	  var rn2=randomNumber(1,2);
	  if (rn1==1){
	    hideElement("BadImage");}
	    else if (rn1==2){
	      showElement("BadImage");
	  }
	 if (rn2==1){
	    hideElement("goodImage");}
	    else if (rn2==2){
	      showElement("goodImage");
	  }
	  
	});
	setScreen("gameScreen");
});
onEvent("all", "click", function( ) {
  setScreen("gameScreen");
	most();
});


function most(){
  
  // from the disapear button
  timedLoop(600,function(){
	  var rn1= randomNumber(1,2);
	  var rn2=randomNumber(1,2);
	  if (rn1==1){
	    hideElement("BadImage");}
	    else if (rn1==2){
	      showElement("BadImage");
	  }
	 if (rn2==1){
	    hideElement("goodImage");}
	    else if (rn2==2){
	      showElement("goodImage");
	  }
	  
	});
	
	// random image gen
	timedLoop(1000,function(){
    // image from the code.org cats list
    	setImageURL("BadImage",images[randomNumber(0,images.length-1)]);
    	// images from the code.org cats data set
    		setImageURL("goodImage",images[randomNumber(0,images.length-1)]);
  });
	
	// changeing the image sizes
	timedLoop(1000,function(){
  setProperty("BadImage","width",randomNumber(30,150));
  setProperty("BadImage","height",randomNumber(30,150));
  setProperty("goodImage","width",randomNumber(30,150));
  setProperty("goodImage","height",randomNumber(30,150));
});
	
	
	// random background color
	timedLoop(700,function(){
  setProperty("gameScreen","background-color",rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
});
	
	// hardmode
	timedLoop(120,function(){
  moveimage2();
  moveimage();
});
hardmodeclicked=1;
	
}
var speed2=100;
onEvent("up", "click", function( ) {
  speed2-1;
timedLoop(speed2,function(){
  move();
  moveimage();
});
});
