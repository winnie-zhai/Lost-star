let shared;
let x = 0;
let y = 0;
let stars = [];
let scene = 0;
let rad = 1; 
let xpos = 20;
let ypos = 280; 
let xpos1 = 300;
let ypos1 = 500;
let xpos2 = 1;
let ypos2 = 1;
let xpos3 = 400;
let ypos3 = 200;
let xspeed = 0.3;
let yspeed = 0.2; 
let xspeed1 = 0.5;
let yspeed1 = 0.8; 
let xspeed2 = 0.1;
let yspeed2 = 0.4; 
let xspeed3 = 0.4;
let yspeed3 = 0.1;
let xdirection = 1; 
let ydirection = 1;
let xdirection1 = 1; 
let ydirection1 = 1;
let xdirection2 = 1; 
let ydirection2 = 1;
let xdirection3 = 1; 
let ydirection3 = 1;
let timer = 20;
let a = 0;  
let img;

function preload() {
  
  partyConnect(
    "wss://deepstream-server-1.herokuapp.com",
    "winnie_wk5",
    "Game A_1"
  );

  shared = partyLoadShared("shared");
    img = loadImage('Group 1 (3).png');
 soundFormats('mp3', 'wav');
   bgmSound = loadSound('random (2).wav');
 
  
  soundFormats('mp3', 'wav');
  clickSound = loadSound('blipSelect.wav');
  
soundFormats('mp3', 'wav');
   lightSound = loadSound('random.wav');
  
  soundFormats('mp3');
   bgmSound = loadSound('Cosmic-Drift-DivKid.mp3');
 
 
 
}


 


function setup() {
  
  createCanvas(400, 600);
    

   for (let i = 0; i < 200; i++) {
    stars.push(new star1());
   shared.xpos = width / 2;
   shared.ypos = height / 2;
   shared.xpos1 = width / 2;
   shared.ypos1 = height / 2;
   shared.xpos3 = width / 2;
   shared.ypos3 = height / 2;
   shared.r = 0
  shared.g = 0;
   shared.r1 = 0;
   shared.g1 = 0;
  shared.r2 = 0;
   shared.g2 = 0;
      shared.r3 = 0;
   shared.g3 = 0;
  }

  
  //button
  Enter = createButton("START");
  Enter.mousePressed(Pressed);
  let col = color(25, 23, 200, 50);
  Enter.style('background-color', col);
  Enter.style("font-family","Roboto Slab");
  Enter.style("color","white");
  Enter.position(160, 400);
  Enter.hide();

  Rule = createButton("HOW TO PLAY");
  Rule.mousePressed(Pressed1);
  let col1 = color(25, 23, 200, 50);
  Rule.style('background-color', col1);
  Rule.style("font-family","Roboto Slab");
  Rule.style("color","white");
  Rule.position(140, 440);
  Rule.hide();
  
  Back = createButton("BACK");
  Back.mousePressed(Pressed2);
  let col2 = color(25, 23, 200, 50);
  Back.style('background-color', col2);
  Back.style("font-family","Roboto Slab");
  Back.style("color","white");
  Back.position(175, 440);
  Back.hide();
  
  Back1 = createButton("TRY AGAIN");
  Back1.mousePressed(Pressed2);
  let col3 = color(25, 23, 200, 50);
  Back1.style('background-color', col3);
  Back1.style("font-family","Roboto Slab");
  Back1.style("color","white");
  Back1.position(160, 440);
  Back1.hide();
  
   Back2 = createButton("BACK");
  Back2.mousePressed(Pressed2);
  let col4 = color(25, 23, 200, 50);
  Back2.style('background-color', col4);
  Back2.style("font-family","Roboto Slab");
  Back2.style("color","white");
  Back2.position(160, 440);
  Back2.hide();

}

function Pressed() {
  scene += 1;
}
function Pressed1() {
  scene = 2;
}

function Pressed2() {
  scene = 0;
}

function draw() {
 
   background(0);
  push();
  fill(	0, 255, 170) ;
ellipse(mouseX, mouseY, 28,28);
  pop();
  if (!bgmSound.isPlaying()) {
  bgmSound.play();
}
  

 for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }
    push();
  //translate(xpos2, ypos2);
 
  //rotate(frameCount /100.0);
  image(img,xpos2, ypos2);
  xpos2 = xpos2 + xspeed2 * xdirection2;
  ypos2 = ypos2 + yspeed2 * ydirection2;
  if (xpos2 > width - rad || xpos2 < rad) {
    xdirection2 *= -1;
  }
  if (ypos2 > height - rad || ypos2 < rad) {
    ydirection2 *= -1;}
     pop();
  

     
 switch (scene) {
     
   case 0:
     
     //bgmSound.play();
     textAlign(CENTER, CENTER);
     push();
     fill(0, 255, 170) ;
     textFont("Parisienne");
     textSize(30);
     text("Le Voyage dans la Lune",190, 140);
     pop();
     textFont("Roboto Slab");
     textSize(15);
     text("A Trip to the Moon",190, 180);
     text("To find the lost stars",190, 210);
    
     break;
     
     case 1:
     
     
textSize(10);
text('TIME REMAINING:',180, 10);
text(timer,240, 10);
     textSize(10);
//text('TIME REMAINING:',180, 10);
text('3/' + a,380, 10);
   if( timer == 0){
      scene = 4;
      timer = 20;}
     
     
  push();
  translate(xpos, ypos);
  fill(shared.r, shared.g, 0);
  rotate(frameCount /100.0);
  star(x, y, 10, 30, 30);
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;}
     pop();
  

     
     push();
  translate(xpos1, ypos1);
  fill(shared.r1, shared.g1, 0);
  rotate(frameCount /100.0);
  star(x, y, 10, 30, 30);
  xpos1 = xpos1 + xspeed1 * xdirection1;
  ypos1 = ypos1 + yspeed1 * ydirection1;
  if (xpos1 > width - rad || xpos1 < rad) {
    xdirection1 *= -1;
  }
  if (ypos1 > height - rad || ypos1 < rad) {
    ydirection1 *= -1;}
     pop();
     
      push();
  translate(xpos3, ypos3);
  fill(shared.r3, shared.g3, 0);
  rotate(frameCount /100.0);
  star(x, y, 10, 30, 30);
  xpos3 = xpos3 + xspeed3 * xdirection3;
  ypos3 = ypos3 + yspeed3 * ydirection3;
  if (xpos3 > width - rad || xpos3 < rad) {
    xdirection3 *= -1;
  }
  if (ypos3 > height - rad || ypos3 < rad) {
    ydirection3 *= -1;}
     pop();
  
    push();
     textFont("Roboto Slab");
     textSize(10);
     text("Where are them?",200, 590);
     pop();
   
break;
//how to play
    case 2:
    textFont("Parisienne");
     textSize(30);
      textAlign(CENTER, CENTER);
     text("Instruction",190, 140);
     
     
     push();
     noFill();
     strokeWeight(1);
     stroke(0, 255, 170);
     rect(125, 225, 150);
     
     pop();
     textAlign(CENTER, CENTER);
     textFont("Roboto Slab");
     textSize(10);
    
     text("mouse over the center of box below",190, 165);
     text("you will see the star",190, 185);
     text("scroll up to light it up",190, 205);
      text("light up all the stars with your partner",190, 405);
     
     push();
     translate(width * 0.5, height * 0.5);
     fill(shared.r2, shared.g2, 0);
  rotate(frameCount /100.0);
  star(x, y, 10, 60, 30);
     pop();
     break;
     
     
     //win
     case 3:
     
     textFont("Parisienne");
     textSize(30);
      textAlign(CENTER, CENTER);
     text("Win",180, 140);
     break;
      case 4:
     
     textFont("Parisienne");
     textSize(30);
    textAlign(CENTER, CENTER);
     text("Lose",200, 140);
     break;

}
if (scene == 0) {
    Enter.show();
     Rule.show();
    
  } else {
    Enter.hide();
     Rule.hide();

  }
  

 if (frameCount % 60 == 0 && timer > 0 &&scene == 1) {
 
  timer--;
 }
  
  
  if (scene == 1 & shared.r >=245 & shared.g >=245 &  shared.r1 >=245 & shared.g1>=245 &  shared.r3 >=245 & shared.g3>=245) { 
    shared.r = 0;
   shared.g = 0;
   shared.r1 = 0;
   shared.g1 = 0;
     shared.r3 = 0;
   shared.g3 = 0;
   timer = 20;
   a = 0;}
    
   if (scene == 3) {
    Back2.show();
     
  } else {
    Back2.hide();
  }  
 

  if (scene == 2) {
    Back.show();
     
  } else {
    Back.hide();
  }
  
  if (scene == 4) {
    Back1.show();
   
     
  } else {
    Back1.hide();
  }
     
     
 }
   //let x = random(width);
function mouseWheel(event) {
  
  shared.x = mouseX;
  shared.y = mouseY;
  
  if (dist(xpos, ypos, mouseX, mouseY ) < 10 ){
  print('hit1');
    shared.r += event.delta;
    shared.g += event.delta;
    
}
  
  
  if (dist(xpos1, ypos1, mouseX, mouseY ) < 10 ){
  print('hit2');
    shared.r1 += event.delta;
    shared.g1 += event.delta;
}
  
  
   
  if (dist(xpos3, ypos3, mouseX, mouseY ) < 10 ){
  print('hit2');
    shared.r3 += event.delta;
    shared.g3 += event.delta;
}
  if (dist(width * 0.5, height * 0.5, mouseX, mouseY ) < 10 ){
  print('hit3');
    shared.r2 += event.delta;
    shared.g2 += event.delta;
}
  
   
  if (  shared.r > 245 &  shared.g >245 &  shared.r1 >245 &  shared.g1> 245 &  shared.r3 >245 &  shared.g3> 245){
     print('win');
    scene = 3;
    a =3;
  }
  
 if ( shared.r >=245 &  shared.g >= 245) {
   
  a =1;
   lightSound.play();

 } else if ( shared.r1 >=245 &  shared.g1>= 245) 
  { a =1;
     lightSound.play();
  
   } else if ( shared.r3 >=245 &  shared.g3>= 245) 
  { a =1;
     lightSound.play();
  
   }
  
  
  if ( shared.r2 >=245 &  shared.g2 >= 245) {
     lightSound.play();}
  
  
   if (shared.r > 245 &  shared.g >245 &  shared.r1 >245 &  shared.g1> 245){
  a =2;} else if (shared.r > 245 &  shared.g >245 &  shared.r3 >245 &  shared.g3> 245) {
     a =2;
   }
    else if (shared.r2 > 245 &  shared.g2 >245 &  shared.r3 >245 &  shared.g3> 245){
       a =2;
     }
     
     
   
   
}
    
  


function star(x, y, radius1, radius2, npoints) {
  noStroke();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {  
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}





class star1 {
  constructor() {
    fill('white');
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(1, 2.5);
    this.speed = 0.2;
  }

  move() {
    push()
;      //rotate(frameCount / 50.0);
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    pop();
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
  
}
function mousePressed() {
   
  
  clickSound.play();
}


