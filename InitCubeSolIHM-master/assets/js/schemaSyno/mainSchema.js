var rectangle1;
var rectangle2;
var rectangle3;
var rectangle4;
var rectangle5;

var cnv;

function preload(){
 recepJson = loadJSON('info.json');
}

function setup() {
  cnv = createCanvas(900, 800);
  cnv.parent('schemaSyno');
  rectangle1 = new Rectangle(width / 3 + 25, 83, 20, "la temperature est de : "+recepJson.temp, recepJson.charge, recepJson.temp2, recepJson.charge);
  rectangle2 = new Rectangle(25, height / 3 + 83, 20, recepJson.charge);
  rectangle3 = new Rectangle(width / 1.5 + 25, height / 3 + 83, 20, recepJson.temp2);
  rectangle4 = new Rectangle(width / 3 + 25, height / 1.5 + 83, 20, "4");
  rectangle5 = new Rectangle(width / 3 + 25, height / 3 + 83, 20, "5");

}

function draw() {
  background(0);
  rectangle1.show();
  drawLine(rectangle1, rectangle3);

  rectangle2.show();
  drawLine(rectangle3, rectangle4);

  rectangle3.show();
  drawLine(rectangle4, rectangle2);

  rectangle4.show();
  drawLine(rectangle2, rectangle1);

  rectangle5.show();
  drawLine(rectangle5, rectangle2);
  drawLine(rectangle5, rectangle1);
  drawLine(rectangle5, rectangle3);
  drawLine(rectangle5, rectangle4);


}

function drawLine(r1, r2) {
  if (r1.x < r2.x) {
    if (r1.y < r2.y) {
      //r1 en haut a gauche par rapport a r2 
      line(r1.xCenter, r1.yDown, r2.xCenter, r2.y);
    } else if (r1.y > r2.y) {
      //r1 en bas a gauche par rapport a r2
      line(r1.xCenter, r1.y, r2.xCenter, r2.yDown);
    } else if (r1.y == r2.y) {
      //r1 a gauche de r2
      line(r1.xRight, r1.yCenter, r2.x, r2.yCenter);
    }
  } else {
    if (r1.y < r2.y) {
      //r1 en haut a droite  par rapport a r2
      line(r1.xCenter, r1.yDown, r2.xCenter, r2.y);
    } else if (r1.y > r2.y) {
      //r1 en bas a droite par rapport a r2 
      line(r1.xCenter, r1.y, r2.xCenter, r2.yDown);
    } else if (r1.y == r2.y) {
      //r1 a gauche de r2
      line(r1.xRight, r1.yCenter, r2.x, r2.yCenter);
    }
  }
} 