//var camera = new CCamera;
//var matrice = new CMatrice(camera);

$(document).ready(function() {
    let graphBattCharge = new Graphique("Etat","Batterie", "Charge","%");
    let graphBattTension = new Graphique("Etat","Batterie", "Tension","V");
    let graphBattCourant = new Graphique("Etat","Batterie", "Courant","A");
    let graphRAMuse = new Graphique("Etat","RAM", "Occupation","%");
    let graphRAMdispo = new Graphique("Etat","RAM", "Disponile","Mo");
    let graphStockLibreP = new Graphique("Etat","Stockage", "Libre","%");
    let graphStockLibreM = new Graphique("Etat","Stockage", "Disponible","Mo");
    var source = new EventSource("../cgi-bin/cubeEventServer.cgi");
    source.addEventListener("etat", function(event) {
    var obj = JSON.parse(event.data);
    document.getElementById("ChargeBatterie").innerHTML = obj.batterie.niveauDeCharge + " %";
    graphBattCharge.ajouterMesure(obj.date,obj.batterie.niveauDeCharge);
    document.getElementById("TensionSortie").innerHTML = obj.batterie.tension + " V";
    graphBattTension.ajouterMesure(obj.date,obj.batterie.tension);
    document.getElementById("CourantSortie").innerHTML = obj.batterie.courant + " mA";
    graphBattCourant.ajouterMesure(obj.date,obj.batterie.courant);
    document.getElementById("RamUse%").innerHTML = obj.memoire.occupMemoire + " %";
    graphRAMuse.ajouterMesure(obj.date,obj.memoire.occupMemoire);
    document.getElementById("RamDispo").innerHTML = obj.memoire.memoireDispoMo + " Mo";
    graphRAMdispo.ajouterMesure(obj.date,obj.memoire.memoireDispoMo);
    document.getElementById("StockLibre%").innerHTML = obj.stockage.stockLibreEnP + " %";
    graphStockLibreP.ajouterMesure(obj.date,obj.stockage.stockLibreEnP);
    document.getElementById("StockLibreMo").innerHTML = obj.stockage.stockLibreMo + " Mo";
    graphStockLibreM.ajouterMesure(obj.date,obj.stockage.stockLibreMo);
    document.getElementById("InfoCamera1").innerHTML = obj.camera.InfoCamera1;
    document.getElementById("InfoCamera2").innerHTML = obj.camera.InfoCamera2;

    if (obj.cameraIR == 0) {
        document.getElementById("CameraIR").innerHTML = "OFF";
    } else {
        document.getElementById("CameraIR").innerHTML = "ON";
    }
});

source.addEventListener("instrument", function(evt){
    var instru = JSON.parse(evt.data);
    var camera = new CCamera();
    var matrice = new CMatrice(camera);
    switch (instru.instrument.type) {
        case "matrice":
            camera.setPixel(instru.instrument.mesure);
            matrice.majMatrice();
            break;
        case "magneto":
            document.getElementById("ValeurMagnetoBX").innerHTML = instru.instrument.mesure.ValeurMagnetoBX + " μT";
            document.getElementById("ValeurMagnetoBY").innerHTML = instru.instrument.mesure.ValeurMagnetoBY + " μT";
            document.getElementById("ValeurMagnetoBZ").innerHTML = instru.instrument.mesure.ValeurMagnetoBZ + " μT";
            break;
        default:
            console.log("Erreur d'identification de l'instrument");
            console.log(instru.instrument.type);
    }
});

});
