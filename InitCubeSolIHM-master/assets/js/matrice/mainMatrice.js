var camerA;
var matrice;
var nbFrame;
var cnv;
var source;
var arr;
let nbSec;


function setup() {
    camerA = new CCamera();
    matrice = new CMatrice2(camerA);
    source = new Source();
    /*console.log(camerA.getArray());*/
    /*console.log(matrice.getArray());*/
    
    cnv = createCanvas(600, 600);
    cnv.parent('matriceP5');
    cnv.position(300,0,'z-index', '-2');

    frameRate(30);
    nbFrame = 0;
    nbSec = 10;


    source.update();
    camerA.setPixel(source.getMatrice());
    matrice.update();    
}

function draw() {
    matrice.show();
    if(frameCount == nbFrame + 30*nbSec){
    	update();
    	nbFrame = frameCount;
    }
}

function update() { 
    source.update();
    camerA.setPixel(source.getMatrice());
    matrice.update();
}