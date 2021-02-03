var colonne = 8;
var ligne = 8;
var tab = [];
var x = 10;
var y = 10;
var sqWidth = 75;
var camera;


function setup() {
  createCanvas(800, 800);
  
  for (let i = 0; i < colonne; i++) {
    tab[i] = [];
    for (let j = 0; j < ligne; j++) {
      tab[i][j] = new Square(x, y, sqWidth, random(0,90));
      x += sqWidth+3;
    }
    y += sqWidth+3;
    x = 10;
  }
}

function draw() {
  background(220);

  for (let i = 0; i < colonne; i++) {
    for (let j = 0; j < ligne; j++) {
      tab[i][j].show();
    }
  }
  
  for (let i = 0; i < colonne; i++) {
    for (let j = 0; j < ligne; j++) {
      
    }
  }
}