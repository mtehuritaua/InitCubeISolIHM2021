/*
 * Auteur : COMMENGE Olivier
 *
 *
 * Classe CMatrice pour la mise à jour de l'affichage des pixels de la camera
 */
class CMatrice {
// Constructeur
   constructor(camera) {
    // définition des attributs de la classe
    this.seuilHaut = 100;
    this.seuilBas = 0;
    this.camera = camera;
	//Les seuils intermédiaires sont calculés de façon à séparer la plage de variation en 
	//4 parties dans lesquelles on retrouve de façon équitable:
	//   - partie 1 : bleu au max + dégradé de vert
	//   - partie 2 : dégradé de bleu + vert au max
	//   - partie 3 : vert au max + dégradé de rouge
	//   - partie 4 : dégradé de vert + rouge au max
	//Afin de limiter la prédominance du vert, les parties ne sont pas égales
	//Par contre, ainsi, le bleu, le vert et le rouge seront au max sur des plage égales.  
	//
	//Premier seuil intermédiaire au premier tiers de la plage
    this.seuilInter1 = parseFloat(this.seuilHaut - 2*(this.seuilHaut-this.seuilBas)/3);
	//Deuxième seuil à la moitié de la plage  
    this.seuilInter2 = parseFloat((this.seuilHaut+this.seuilBas)/2);
	//troisième seuil aux deux tiers de la plage
    this.seuilInter3 = parseFloat(this.seuilHaut - (this.seuilHaut-this.seuilBas)/3);
   }


/**
 * Met à jour la couleur de tous les pixelsde la matrice
 * @param : aucun
 * @returns : rien
 */
    majMatrice() {
	for (var numPixel = 0; numPixel<64; numPixel++)
	{
		var valeur = this.camera.getPixel(numPixel);
		this.setPixelColor(numPixel,valeur);
	}
    }


/**
 * Modifie la couleur d'un pixel et affiche sa valeur
 * @param {Int} pixel : numéro du pixel à modifier
 * @param {Float} valeur de la température représentée par ce pixel
 * @returns {Void}
 */
     setPixelColor(pixel,valeur) {
        //affichage de la valeur

        $("#pixel"+pixel).css("color","white");
        $("#pixel"+pixel).html(valeur);

        //modification de la couleur
        var R = 0;
        var V = 0;
        var B = 0;
        var temperature = parseFloat(valeur);
        if ((temperature <= this.seuilHaut) && (temperature > this.seuilInter3))
        {
                //valeur du rouge
                R = 255;
                B = 0;
                //valeur du vert
                //parseInt permet d'approximer à l'entier le plus proche
                V = parseInt((this.seuilHaut - temperature)/(this.seuilHaut-this.seuilInter3)*255);
        }
        if ((temperature <= this.seuilInter3) && (temperature > this.seuilInter2))
       	{
                V = 255;
                R = parseInt(255*(1-(this.seuilInter3-temperature)/(this.seuilInter3-this.seuilInter2)));
                B = 0;
        }
        if ((temperature <= this.seuilInter2) && (temperature > this.seuilInter1))
        {
                R = 0;
                V = 255
                B = parseInt((this.seuilInter2 - temperature)/(this.seuilInter2-this.seuilInter1)*255);
        }
		if ((temperature <= this.seuilInter1) && (temperature >= this.seuilBas))
        {
                R = 0;
                V = parseInt(255*(1-(this.seuilInter1-temperature)/(this.seuilInter1-this.seuilBas)));
                B = 255;
        }

        //Pour exprimer la quantité de rouge en hexa sur deux caractères, il faut créer
        //une chaîne de caractère commençant par un zéro et utiliser la fonction slice() pour conserver
        //les deux derniers caractères. Si toString() renvoie un caractère seul (de 0 à 9, de A à F),
        // un zéro sera ajouté, sinon ça sera transparent.

        //génération de la couleur (toString(16) exporte la valeur en hexa)
        var couleur = '#'+('0'+R.toString(16)).slice(-2)+('0'+V.toString(16)).slice(-2)+('0'+B.toString(16)).slice(-2);

        //modification de la couleur du pixel
        $("#pixel"+pixel).css("background-color",couleur);

    }

};
