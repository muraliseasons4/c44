var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  Security = new Security()
  System = new System()
}

function draw() {
  
  // Add code to display score in the middle of the screen
  background(bg);
clues();
Security.display();

  // Add code to display the end screen
  if(score === 3){
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("𝓣𝓡𝓔𝓐𝓢𝓤𝓡𝓔 𝓤𝓝𝓛𝓞𝓒𝓚𝓔𝓓",250, 200)
  }

  drawSprites()
}





