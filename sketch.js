var back, bImg;
var play, marketPlace;
var gs="start";
var dog, dogImg;
var arrow, arrowImg;
var o1,o2,o3;
var hide= false;
var thedog;
var count=0;

function preload(){
  bImg= loadImage("back.jpg");
  dogImg= loadImage("dog.gif");
  arrowImg= loadImage("arrow.gif");
}

function setup(){
  createCanvas(windowWidth-8, windowHeight-8);

  back= createSprite(0,0,width*3, height);
  back.addImage(bImg);
  back.scale= 4.5;

  play= createButton("PLAY");
  play.position(width/2, height/3);
  play.size(80,50);
  play.mouseClicked(change);

  play.style("background-color", "lightblue");
  play.style("font-size", "24px");
  play.style("font-weight", "bold");
  play.style("color", "white");

  marketPlace= createButton("MARKETPLACE");
  marketPlace.position(width/2-50, height/3+80);
  marketPlace.size(200,50);

  marketPlace.style("background-color", "lightblue");
  marketPlace.style("font-size", "24px");
  marketPlace.style("font-weight", "bold");
  marketPlace.style("color", "white");

  dog= createSprite(width/2, height/5, 20,20);
  dog.addImage("dog",dogImg);
  dog.scale= 0.5;
  dog.visible= false;

  arrow= createSprite(width/20-50, height/7-50, 20,20);
  arrow.addImage(arrowImg);
  arrow.scale= 0.1;
  arrow.visible= false;

  o1= createSprite(width/3-50, height/5, 40,40);

  o2= createSprite(width-450, height/5, 40,40);

  o3= createSprite(width/2, height/2-50, 40,40);

  thedog= createSprite(dog.x, dog.y, 40,40);
}

function draw(){

  background(30);

  frameRate(80);

  if(gs==="start"){
    play.style('display', 'block');
    marketPlace.style('display', 'block');
  }

  if(gs==="play"){
    play.style('display', 'none');
    marketPlace.style('display', 'none');
    dog.visible= true;
    arrow.visible= true;

    if(mousePressedOver(back)){
      start();
    }

    if(hide===true){
      dog.visible= false;

      if(frameCount%30===0 && count<=5){
        count++;
        thedog.x=random(width/15, width-100) ;
        thedog.y= random(height-50, height/7);
        o1.x= random(width/15, width-100);
        o1.y= random(height-50, height/7);
        o2.x= random(width/15, width-100);
        o2.y= random(height-50, height/7);
        o3.x= random(width/15, width-100);
        o3.y= random(height-50, height/7);
      }

      if(count===5){
        if(mousePressedOver(thedog)){
          thedog.visible= false;
          dog.x= thedog.x;
          dog.y= thedog.y;
          dog.visible= true;
        }
      }
    }
  }

  drawSprites();

  if(gs==="start"){

  textStyle(BOLD);
  fill(255, 0, 0);
  stroke(0, 0, 0);
  textSize(40);

  text("THE MEMORY WORKER", width/3+20, height/5);
  // text.class("classText");

  }
}

function change(){
  gs="play";
}

function start(){
  hide= true;
}

