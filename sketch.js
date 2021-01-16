var database;
var player;
var red,blue,green,orange,pink,cyan,lightgreen,black
var u,d,or,l,tr
var playerpos;
function setup() {
  createCanvas(1350,640);
  //database=firebase.database();
   player = createSprite(200,200,7,7);
   //playerpos=database.ref('paint/position')
  // playerpos.on("value",readPosition)
   u = createSprite(700,20,1500,20);
   u.shapeColor = "black";
    d = createSprite(700,620,1500,20);
   d.shapeColor = "black";
    or = createSprite(1100,300,20,670);
   or.shapeColor = "black";
    l = createSprite(1000,300,20,670);
   l.shapeColor = "black";
   tr = createSprite(10, 300,20,650);
   tr.shapeColor = "black";

 red = createSprite(1050,60,20,20);
red.shapeColor = "red";

 blue = createSprite(1050,100,20,20);
blue.shapeColor = "blue";

 green = createSprite(1050,140,20,20);
green.shapeColor = "green";

 orange = createSprite(1050,180,20,20);
orange.shapeColor = "orange";

 pink = createSprite(1050,220,20,20);
pink.shapeColor = "pink";

 cyan = createSprite(1050,260,20,20);
cyan.shapeColor = "cyan";

 lightgreen = createSprite(1050,300,20,20);
lightgreen.shapeColor = "lightgreen";

 black = createSprite(1050,340,20,20);
black.shapeColor = "black";
textSize(16);
text("press on the colour to add colour",1115,60);

text("press 'E' to use the eraser",1115,90);

text("press 'R' to clear the screen",1115,120);

text("use arrowkeys to move", 1115,150);
}

function draw() {
 
  if(mousePressedOver(player)){
    player.x=mouseX;
    player.y=mouseY;
  }
  



if (mousePressedOver(red)){
  player.shapeColor = "red";
}
if (mousePressedOver(blue)){
  player.shapeColor = "blue";
}
if (mousePressedOver(green)){
  player.shapeColor = "green";
}
if (mousePressedOver(black)){
  player.shapeColor = "black";
}
if (mousePressedOver(cyan)){
  player.shapeColor = "cyan";
}
if (mousePressedOver(orange)){
  player.shapeColor = "orange";
}
if (mousePressedOver(lightgreen)){
  player.shapeColor = "lightgreen";
}
if (mousePressedOver(pink)){
  player.shapeColor = "pink";
}

if (keyDown("r")){
  player.x = 200;
  player.y = 200;
  background(  "white");
}

if(keyDown(LEFT_ARROW)){
  //changePosition(-3,0);
  player.x=player.x-3;
 // player.y=player.y+3;
}
else if(keyDown(RIGHT_ARROW)){
  //changePosition(3,0);
  player.x=player.x+3;
  //player.y=player.y+3;
}
else if(keyDown(UP_ARROW)){
  //changePosition(0,-3);
 // player.x=player.x+3;
  player.y=player.y-3;
}
else if(keyDown(DOWN_ARROW)){
  //changePosition(0,+3);
//  player.x=player.x+3;
  player.y=player.y+3;
}

player.collide(u)
player.collide(l)
player.collide(d)
player.collide(or)
player.collide(tr)

drawSprites();
 textSize(16);
text("press on the colour to add colour",1115,60);

text("press 'E' to use the eraser",1115,90);

text("press 'R' to clear the screen",1115,120);

text("use arrowkeys to move", 1115,150); 
if(player.mousePressed){
  playerx=mouseX;
  player.y=mouseY;
}

}
function changePosition(x,y){
  player.x = player.x + x;
  player.y = player.y + y;
}
//function readPosition(data){
 // position = data.val()
 // player.x=playerpos.x;
 /// player.y=player.y;
 // console.log(position.x)
 // console.log(position.y)
//}
//function writePosition(x,y){
/// database.ref('paint/position').set({
//   'x':position.x+x,
 //  'y':position.y+y

 //})
//}
function mousePressed(){
  
}
