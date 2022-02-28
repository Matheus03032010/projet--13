//Projeto 13
//Autor: Matheus Henrique
//Data: 23/02/22

// Declaração de variáveis
var bow , arrow,  background, red, green, pink, blue, scene;
var qtdeR=0, qtdeB=0, qtdeP=0, qtdeG=0;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;
//faz as animações dos sprites
function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  // exercicio 1
  red_balloonImage = loadImage("red_balloon0.png");
  // red_balloonImage = loadImage("redballoon0.png");
  // red_balloonImage = loadImage("red_balloon0");
  //red_balloonImage = loadImage("red_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para atirar flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  // zerando as quantidades
  qtdeR = 0;
  qtdeB = 0;
  qtdeP = 0;
  qtdeG = 0;
  score = 0;

  // criando sprites
  arrow= createSprite();
  arrow.addImage(arrowImage);
  arrow.visible = false;

  red = createSprite();
  red.visible = false;

  green = createSprite();
  green.visible = false;

  blue = createSprite();
  blue.visible = false;

  pink = createSprite();
  pink.visible = false;
} // fim do setup

  //inicio do draw
function draw() {
  background(0);
  // movendo chão
  scene.velocityX = -3; 

  if (scene.x <= 0){
    scene.x = scene.width/2;
  }
  
  //movendo flecha
  bow.y = World.mouseY
  
  // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createArrow();
  }
  
  //criando inimigos continuamente
 
  var select_balloon = Math.round(random(1,4));
  // var select_balloon = random(1,4);
  // var select_balloon = Math.round(random());
  // var select_balloon = Math.round(random(1,4,2));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  // verifica se colidiu e aumenta o score
  if(arrow.collide(red)){
    score = score + 1
    red.visible = false;
    arrow.visible = false;
    qtdeR++;
  }

  if(arrow.collide(blue)){
    score = score + 2;
    blue.visible = false;
    arrow.visible = false;
    qtdeB++;
  }

  if(arrow.collide(green)){
    score = score + 3;
    green.visible = false;
    arrow.visible = false;
    qtdeG++;
  }

  if(arrow.collide(pink)){
    score = score + 4;
    pink.visible = false;
    arrow.visible = false;
    qtdeP++;
  }
  //fim do draw
  drawSprites();
  
  text("Pontuação: "+ score, 300,50);
  text("QTDE   RED: "+ qtdeR, 300,80);
  text("QTDE GREEN: "+ qtdeG, 300,100);
  text("QTDE  PINK: "+ qtdeP, 300,120);
  text("QTDE  BLUE: "+ qtdeB, 300,140);
  
} // fim do draw


// Criando flechas para arco
 function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.visible = true;
  
}

// function redBalloon() {
//   var red = createSprite(0,50, 10, 10);
//   red.addImage(red_balloonImage);
//   red.velocityX = 3;
//   red.lifetime = 150;
//   red.scale = 0.1;
// }

// function redBalloon() {
//   var red = createSprite(,Math.round(random(20, 370)),50, 10, 10);
//   red.addImage(red_balloonImage);
//   red.velocityX = 3;
//   red.lifetime = 150;
//   red.scale = 0.1;
// }

function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  red.visible = true;
}

// function redBalloon() {
//   var red = createSprite(0, 10, Math.round(random(20, 370)) , 10);
//   red.addImage(red_balloonImage);
//   red.velocityX = 3;
//   red.lifetime = 150;
//   red.scale = 0.1;
// }

function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
}
//fim do projeto