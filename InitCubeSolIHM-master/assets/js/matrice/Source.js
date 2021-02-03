class Source{
	constructor(){
		this.source = new EventSource("../../cgi-bin/cubeEventServer.cgi");
		this.obj = 0;
		this.arr = new Array(64);
	}

	update(){
		this.source.addEventListener("etat", function(event) {
	        this.obj = JSON.parse(event.data);
	        document.getElementById("ChargeBatterie").innerHTML = this.obj.batterie.niveauDeCharge + " %";
	        document.getElementById("TensionSortie").innerHTML = this.obj.batterie.tension + " V";
	        document.getElementById("CourantSortie").innerHTML = this.obj.batterie.courant + " mA";
	        document.getElementById("RamUse%").innerHTML = this.obj.memoire.occupMemoire + " %";
	        document.getElementById("RamDispo").innerHTML = this.obj.memoire.memoireDispoMo + " Mo";
	        document.getElementById("StockLibre%").innerHTML = this.obj.stockage.stockLibreEnP + " %";
	        document.getElementById("StockLibreMo").innerHTML = this.obj.stockage.stockLibreMo + " Mo";

	        document.getElementById("ValeurMagnetoBX").innerHTML = this.obj.magneto.ValeurMagnetoBX + " μT";
	        document.getElementById("ValeurMagnetoBY").innerHTML = this.obj.magneto.ValeurMagnetoBY + " μT";
	        document.getElementById("ValeurMagnetoBZ").innerHTML = this.obj.magneto.ValeurMagnetoBZ + " μT";
	        document.getElementById("InfoCamera1").innerHTML = this.obj.camera.InfoCamera1;
	        document.getElementById("InfoCamera2").innerHTML = this.obj.camera.InfoCamera2;

	        /*document.getElementById("Temperature").innerHTML = this.obj.temperatureSys.temp + " °C";
	        document.getElementById("Temperature1").innerHTML = this.obj.temperatureSys.temp1 + " °C";
	        document.getElementById("Temperature2").innerHTML = this.obj.temperatureSys.temp2 + " °C";
	        document.getElementById("Temperature3").innerHTML = this.obj.temperatureSys.temp3 + " °C";*/

	        if (this.obj.cameraIR == 0) {
	            document.getElementById("CameraIR").innerHTML = "OFF";
	        } else {
	            document.getElementById("CameraIR").innerHTML = "ON";
	        }
	        for (var i = 0; i < 10; i++) {
	            myChart.data.datasets[0].data[i] = myChart.data.datasets[0].data[i + 1];
	            myChart.data.datasets[1].data[i] = myChart.data.datasets[1].data[i + 1];
	            myChart.data.datasets[2].data[i] = myChart.data.datasets[2].data[i + 1];
	            myChart.data.datasets[3].data[i] = myChart.data.datasets[3].data[i + 1];
	            myChart.data.datasets[4].data[i] = myChart.data.datasets[4].data[i + 1];
	        };
	    myChart.data.datasets[0].data[10] = this.obj.temp;
	    myChart.data.datasets[1].data[10] = this.obj.temp1;
	    myChart.data.datasets[2].data[10] = this.obj.temp2;
	    myChart.data.datasets[3].data[10] = this.obj.temp3;
	    myChart.data.datasets[4].data[10] = this.obj.temp4;
	    myChart.update();
    });
    this.source.addEventListener("matrice", function(evt){
        this.obj = JSON.parse(evt.data);
        this.arr = this.obj.matrice;
    });
	}

	getEtat(){

	}

	getMatrice(){
		return this.arr;
	}
}