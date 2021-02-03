// Constructeur
function CCamera() {
    // définition des attributs de la classe
	
	this.pixel = new Array();
//(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64);  
   // Valeur mesurés par la caméras stocké dans un tableau de 64 valeur 

   this.expixel = new Array
(18.50,19.00,18.25,19.25,18.25,18.75,18.75,18.75,18.50,18.50,18.50,19.00,19.00,18.75,19.25,19.50,18.75,18.25,18.25,18.75,18.75,19.00,18.75,19.00,18.50,18.50,18.75,18.50,18.75,18.75,19.00,18.75,18.75,19.00,18.50,18.50,19.25,18.25,19.00,19.25,18.75,18.75,19.00,18.75,19.00,19.25,18.25,18.75,18.50,18.75,19.00,19.25,18.50,19.00,18.50,19.50,18.00,19.50,18.75,18.50,18.25,18.50,19.00,18.25);  
   // Valeur mesurés par la caméras stocké dans un tableau de 64 valeur

   this.hotpixel = new Array
(23.500,25.500,26.500,27.250,25.500,23.250,22.750,23.250,24.500,25.750,33.750,43.500,30.500,25.250,25.000,25.250,23.750,22.750,35.500,74.000,34.000,25.000,24.750,25.500,22.250,22.000,25.250,50.250,37.000,25.250,25.750,26.750,21.500,21.750,23.250,32.250,31.500,26.000,26.250,26.750,21.500,20.750,21.750,25.500,28.750,27.250,25.250,26.750,21.500,20.500,21.250,23.500,27.750,27.750,26.250,26.000,21.250,20.750,20.500,21.500,25.250,26.500,25.750,26.000);
// Valeur mesurés par la caméras stocké dans un tableau de 64 valeur 

   this.coldpixel = new Array
(18.500,15.000,6.750,7.250,6.500,15.250,19.500,21.500,17.500,13.750,5.750,5.750,6.250,14.500,20.750,22.000,19.250,14.000,6.000,6.500,6.750,14.250,19.250,23.500,17.500,13.750,6.250,6.000,6.500,12.500,18.500,22.250,17.500,13.750,7.750,7.500,8.000,13.000,17.500,23.000,17.500,13.500,8.000,8.250,9.000,14.000,17.500,19.250,18.250,14.500,8.750,9.000,8.500,13.750,18.000,22.250,17.000,15.750,8.500,6.000,6.750,15.000,18.000,22.750);
// Valeur mesurés par la caméras stocké dans un tableau de 64 valeur  
};

CCamera.prototype.setPixel = function(pixel){
	this.pixel = pixel;

}


//Cible et retourne la valeur du pixel demandé 
CCamera.prototype.getPixel = function(numero){
	return this.pixel[numero];

}

//Cible et retourne la valeur du pixel demandé 
CCamera.prototype.ExGetPixel = function(numero){
	return this.expixel[numero];

}
CCamera.prototype.HotGetPixel = function(numero){
	return this.hotpixel[numero];

}
CCamera.prototype.ColdGetPixel = function(numero){
	return this.coldpixel[numero];

}
