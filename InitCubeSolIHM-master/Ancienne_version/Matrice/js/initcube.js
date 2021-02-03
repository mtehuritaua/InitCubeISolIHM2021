//Instanciation de la classe CMatrice
var camera = new CCamera();
var matrice = new CMatrice(camera);

// ----------------------------------------------------------------------------

/**
 * ---------- Fonction exécutée après le chargement de la page ----------------
 */

$( document ).ready(function(){      // lancé quand le DOM est initialisé (prêt)	
	
	//à chaque fois que la valeur du slider change, on modifie la couleur de fond de la barre
	//en fonction de la valeur du slider.
	    var source = new EventSource("../cgi-bin/EnvoieTempSSE.cgi");
   			 source.onmessage = function(event) 
 	 {
        	var obj = JSON.parse (event.data);
        	document.getElementById("temp").innerHTML = obj.temp;
        	//document.getElementById("matrice").innerHTML = obj.matrice;
		camera.setPixel(obj.matrice);
		matrice.majMatrice();
    		};

	$("#slider-1").change(function () {

	 	
		var value = $(this).slider().val();
			for (var numPixel = 0; numPixel<64 ; numPixel++)
			{
				matrice.setPixelColor(numPixel,value);
			}	
	});

	  $( "#target" ).click(function(){
		matrice.majMatrice();

          });

	  $( "#target3" ).click(function(){
		matrice.ExMatrice();

          });

	  $( "#target4" ).click(function(){
		matrice.HotMatrice();

          });

	  $( "#target5" ).click(function(){
		matrice.ColdMatrice();

          });
});
