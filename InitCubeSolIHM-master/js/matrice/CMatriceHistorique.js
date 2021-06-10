/*
 * Auteur : COMMENGE Olivier
 *
 *
 * Classe CMatrice pour la mise à jour de l'affichage des pixels de la camera
 */
class CMatriceHistorique extends CMatrice {
// Constructeur
   constructor(camera) {
    super(camera);
   }

/**
 * Modifie la couleur d'un pixel et affiche sa valeur
 * @param {Int} pixel : numéro du pixel à modifier
 * @param {Float} valeur de la température représentée par ce pixel
 * @returns {Void}
 */
     setPixelColor(pixel,valeur) {
        //affichage de la valeur

        $("#ixel"+pixel).css("color","white");
        $("#ixel"+pixel).html(valeur);

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
        $("#ixel"+pixel).css("background-color",couleur);

    }

};
