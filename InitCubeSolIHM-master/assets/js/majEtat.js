var source = new EventSource("../cgi-bin/cubeEventServer.cgi");
source.addEventListener("etat", function(event) {
    var obj = JSON.parse(event.data);
    document.getElementById("ChargeBatterie").innerHTML = obj.batterie.niveauDeCharge + " %";
    document.getElementById("TensionSortie").innerHTML = obj.batterie.tension + " V";
    document.getElementById("CourantSortie").innerHTML = obj.batterie.courant + " mA";
    document.getElementById("RamUse%").innerHTML = obj.memoire.occupMemoire + " %";
    document.getElementById("RamDispo").innerHTML = obj.memoire.memoireDispoMo + " Mo";
    document.getElementById("StockLibre%").innerHTML = obj.stockage.stockLibreEnP + " %";
    document.getElementById("StockLibreMo").innerHTML = obj.stockage.stockLibreMo + " Mo";

    /*document.getElementById("ValeurMagnetoBX").innerHTML = obj.magneto.ValeurMagnetoBX + " μT";
    document.getElementById("ValeurMagnetoBY").innerHTML = obj.magneto.ValeurMagnetoBY + " μT";
    document.getElementById("ValeurMagnetoBZ").innerHTML = obj.magneto.ValeurMagnetoBZ + " μT";
    document.getElementById("InfoCamera1").innerHTML = obj.camera.InfoCamera1;
    document.getElementById("InfoCamera2").innerHTML = obj.camera.InfoCamera2;*/

/*    document.getElementById("Temperature").innerHTML = obj.temperatureSys.temp + " °C";
    document.getElementById("Temperature1").innerHTML = obj.temperatureSys.temp1 + " °C";
    document.getElementById("Temperature2").innerHTML = obj.temperatureSys.temp2 + " °C";
    document.getElementById("Temperature3").innerHTML = obj.temperatureSys.temp3 + " °C";*/

    if (obj.cameraIR == 0) {
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
    myChart.data.datasets[0].data[10] = obj.temp;
    myChart.data.datasets[1].data[10] = obj.temp1;
    myChart.data.datasets[2].data[10] = obj.temp2;
    myChart.data.datasets[3].data[10] = obj.temp3;
    myChart.data.datasets[4].data[10] = obj.temp4;
    myChart.update();
});
source.addEventListener("matrice", function(evt){
    var obj = JSON.parse(evt.data);
    document.getElementById("arrMatrice").innerHTML = obj.matrice;
});