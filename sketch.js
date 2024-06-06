let xb=250
let yb=225
let diametro=20
let xr=5;
let yr=150;
let lr=7;
let ar=80;
let xri=485;
let yri=150;

let raio = diametro/2;
let xvb=8
let yvb=8

let pontosdocapitalismo = 0;
let pontosdosocialismo = 0;

let colidiu=false;
let imagem;
let ponto;
let raquete;  
let fundo;
function setup() {
  createCanvas(500, 450);
  fundo.loop();

}
function draw() {
  image(imagem,0,0,500,450)
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr);
  mostraraquete(xri,yri);
  mexeraqueteinimigo();
  mexeraquete();
  quicanasbolas(xri,yri);
  quicanasbolas(xr,yr);
  pontos()
  placar()
  texto()
}
function preload(){
  imagem= loadImage("dino.png")
  fundo=loadSound("among.wav")
  ponto=loadSound("yeah.wav")
  raquetada=loadSound("goofy.wav")
  
}
  function mostrabola(){
  circle(xb,yb,diametro);
}
function mexebola(){
  xb+=xvb
  yb+=yvb
}
function mostraraquete(x,y){
    rect(x,y,lr,ar)
  }
function quicabola(){
  if(xb+raio>width||xb-raio<0){
    xvb*=-1}
  
   if(yb+raio>height||yb-raio<0){
    yvb*=-1}
}
  function mexeraquete(){
    if(keyIsDown(UP_ARROW))
yr -=10 
  if(keyIsDown(DOWN_ARROW))
yr +=10 
  }

function mexeraqueteinimigo(){
   if(keyIsDown(87)) 
yri -=10  
  if(keyIsDown(83))
yri +=10 
}
function quicanasbolas(x,y){
  colidiu=collideRectCircle(x,y,lr,ar,xb,yb,raio);
  if(colidiu){xvb*=-1;
  raquetada.play();       
 }
}
function pontos() {
if (xb>490){ pontosdocapitalismo +=1
           ponto.play();
}

if (xb<10){ pontosdosocialismo +=1
          ponto.play();
          }
}


function placar (){
  stroke(" rgba(255,192,203,0.85)");
  textAlign(CENTER);
  textSize(20);
  fill("#E91E63");
  rect(100,10,40);
  fill("green");
  rect(355,10,40);
  fill("white");
  text(pontosdocapitalismo,120,25);
  text(pontosdosocialismo,375,25);
}
function texto(){
  let frase= "brancos"
  let xf=75;
  let yf=60;
  textSize(20);
  textAlign(LEFT,TOP);
  fill("#EBF1F1");
  text(frase,xf,yf)

  let frase2= "negros "
  let xf2=330;
  let yf2=60;
  textSize(20);
  textAlign(LEFT,TOP);
  fill("#FFFFFF");
  text(frase2,xf2,yf2)
}