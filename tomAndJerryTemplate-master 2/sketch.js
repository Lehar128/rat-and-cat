var cat,rat
function preload() {
    //load the images here
 BG=loadImage("images/garden.png")
cat1=loadImage("images/cat1.png")
 cat2=loadAnimation("images/cat2.png", "images/cat3.png")
 cat3=loadAnimation("images/cat4.png")
 rat1=loadImage("images/mouse1.png")
 rat2=loadAnimation("images/mouse2.png", "images/mouse3.png")
 rat3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addImage("cat",cat1)
cat.scale=0.2

rat=createSprite(200,600)
rat.addImage("rat",rat1)
rat.scale=0.1
}

function draw() {

    background(BG);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-rat.x<(cat.width-rat.width)/2){
cat.velocityX=0
cat.addAnimation("cat",cat3)
cat.x=300
cat.scale=0.2
cat.changeAnimation("cat")
rat.addAnimation("rat",rat3)
rat.changeAnimation("rat")

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){

    cat.velocityX=-5
    cat.addAnimation("catRunning",cat2)
    cat.changeAnimation("catRunning")
    rat.addAnimation("ratT",rat2)
    rat.changeAnimation("ratT")
}

}
