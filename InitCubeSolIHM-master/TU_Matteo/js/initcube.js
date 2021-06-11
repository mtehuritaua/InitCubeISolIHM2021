$(document).ready(function() {

    /*-------------------------------------Segment Vol-----------------------------------------------------------------*/
    let segmentVol = new SegmentVol("XMLtest.xml");

    /*-------------------------------------Graphiques de la page Etat--------------------------------------------------*/
    let graphBattCharge = new Graphique("graphique", "Etat", "Batterie", "Charge", "%");
    let graphBattTension = new Graphique("graphique", "Etat", "Batterie", "Tension", "V");
    let graphBattCourant = new Graphique("graphique", "Etat", "Batterie", "Courant", "A");
    let graphRAMuse = new Graphique("graphique", "Etat", "RAM", "Occupation", "%");
    let graphRAMdispo = new Graphique("graphique", "Etat", "RAM", "Disponile", "Mo");
    let graphStockLibreP = new Graphique("graphique", "Etat", "Stockage", "Libre", "%");
    let graphStockLibreM = new Graphique("graphique", "Etat", "Stockage", "Disponible", "Mo");

    /*---------------------------------------Méthode de la classe Graphique pour la Page Etat-------------------------*/
    var source = new EventSource("../cgi-bin/cgiDiffuserTM.cgi");//modifier nom cgi: cgiDiffuserTM.cgi (TéléMesure)
    source.addEventListener("status", function(event) {
        var trame = JSON.parse(event.data);
        document.getElementById("charge").innerHTML = trame.status.batterie.charge;
        
        document.getElementById("CourantSortie").innerHTML = trame.status.batterie.CourantmA + " mA";
        graphBattCourant.ajouterMesure(trame.date, trame.status.batterie.CourantmA);

        document.getElementById("ChargeBatterie").innerHTML = obj.batterie.niveauDeCharge + " %";
        graphBattCharge.ajouterMesure(obj.date, obj.batterie.niveauDeCharge);
        document.getElementById("TensionSortie").innerHTML = obj.batterie.tension + " V";
        graphBattTension.ajouterMesure(obj.date, obj.batterie.tension);
        
        document.getElementById("RamUse%").innerHTML = obj.memoire.occupMemoire + " %";
        graphRAMuse.ajouterMesure(obj.date, obj.memoire.occupMemoire);
        document.getElementById("RamDispo").innerHTML = obj.memoire.memoireDispoMo + " Mo";
        graphRAMdispo.ajouterMesure(obj.date, obj.memoire.memoireDispoMo);
        document.getElementById("StockLibre%").innerHTML = obj.stockage.stockLibreEnP + " %";
        graphStockLibreP.ajouterMesure(obj.date, obj.stockage.stockLibreEnP);
        document.getElementById("StockLibreMo").innerHTML = obj.stockage.stockLibreMo + " Mo";
        graphStockLibreM.ajouterMesure(obj.date, obj.stockage.stockLibreMo);
        document.getElementById("InfoCamera1").innerHTML = obj.camera.InfoCamera1;
        document.getElementById("InfoCamera2").innerHTML = obj.camera.InfoCamera2;

        if (obj.cameraIR == 0) {
            document.getElementById("CameraIR").innerHTML = "OFF";
        } else {
            document.getElementById("CameraIR").innerHTML = "ON";
        }
    });
});