class Square {
    constructor(x, y, w, temp) {
        this.width = w;
        this.x = x;
        this.y = y;
        this.r = 10;
        this.g = 10;
        this.b = 10;
        this.temp = temp;
    }

    show() {
        this.calcColor();
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.width, this.width);
        fill(0);
        textSize(20);
        // text(this.temp, this.x, this.y + 20);
    }

    setSquareTemp(t) {
        this.temp = t;
    }

    calcColor() {
      var seuilHaut = 90;
      var seuilBas = 0;

      var seuilInter1 = parseFloat(seuilHaut - 2 * (seuilHaut - seuilBas) / 3);
      //Deuxième seuil à la moitié de la plage  
      var seuilInter2 = parseFloat((seuilHaut + seuilBas) / 2);
      //troisième seuil aux deux tiers de la plage
      var seuilInter3 = parseFloat(seuilHaut - (seuilHaut - seuilBas) / 3);



      if ((this.temp <= seuilHaut) && (this.temp > seuilInter3)) {
          //valeur du rouge
          this.r = 255;
          this.b = 0;
          //valeur du vert
          //parseInt permet d'approximer à l'entier le plus proche
          this.g = parseInt((seuilHaut - this.temp) / (seuilHaut - seuilInter3) * 255);
      }
      if ((this.temp <= seuilInter3) && (this.temp > seuilInter2)) {
          this.g = 255;
          this.r = parseInt(255 * (1 - (seuilInter3 - this.temp) / (seuilInter3 - seuilInter2)));
          this.b = 0;
      }
      if ((this.temp <= seuilInter2) && (this.temp > seuilInter1)) {
          this.r = 0;
          this.g = 255
          this.b = parseInt((seuilInter2 - this.temp) / (seuilInter2 - seuilInter1) * 255);
      }
      if ((this.temp <= seuilInter1) && (this.temp >= seuilBas)) {
          this.r = 0;
          this.g = parseInt(255 * (1 - (seuilInter1 - this.temp) / (seuilInter1 - seuilBas)));
          this.b = 255;
      }
    }
}