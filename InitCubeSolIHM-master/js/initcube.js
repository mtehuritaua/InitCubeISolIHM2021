$(document).ready(function() {

    /*-------------------------------------Segment Vol-----------------------------------------------------------------*/
    let segmentVol = new SegmentVol("../initcube.xml");


    /*-------------------------------------Gestionnaire de commandes ---------------------------------------------------*/
    let gestionnaireCommandes = new GestionnaireCommandes(segmentVol);
    let vueNouvelleCommande = new VueNouvelleCommande(gestionnaireCommandes);
    let vueHistorique = new VueHistorique(gestionnaireCommandes);

    gestionnaireCommandes.getHistorique(); //charge l'historique
    vueHistorique.afficherHistorique(); //affiche l'historique

    /*--------------------------------------Partie pour la classe VueInstrument----------------------------------------*/
    let vueInstruments = new Array();
    segmentVol.listeInstruments.forEach(function(element, index) {
        vueInstruments[index] = new VueInstrument(segmentVol.listeInstruments[index]); //Instanciation de la class VueInstrument
    });


    /*-------------------------------------Gestionnaire d'Instrument---------------------------------------------------*/
    let gestionnaireConfiguration = new GestionnaireConfiguration(segmentVol);
    let vueNvelleInstrument = new VueNouvelleInstrument();
    let vueConfSV = new VueConfigurationSV(gestionnaireConfiguration);

    /*-------------------------------------Graphiques de la page Etat--------------------------------------------------*/
    //let graphBattCharge = new Graphique("graphique", "Status", "Batterie", "ChargeBatterie");
    let graphBattCourant = new Graphique("graphique", "Status", "Batterie", "Courant", "mA");
    let graphBattNivCharge = new Graphique("graphique", "Status", "Batterie", "NiveauDeCharge", "%");
    let grahpBattTemp = new Graphique("graphique", "Status", "Batterie", "Temperature", "°C");
    let graphBattTension = new Graphique("graphique", "Status", "Batterie", "Tension", "V");
    
    //let graphBordDate = new Graphique("graphique", "Status", "Bord", "Date/Heure");
    let graphBordRamUse = new Graphique("graphique", "Status", "Bord", "Occupation", "%");
    let graphStockSDLibreMo = new Graphique("graphique", "Status", "Bord", "StockageSDLibreMo", "Mo");
    let grahpBordTemp = new Graphique("graphique", "Status", "Bord", "Temperature", "°C");

    let grahpCubeTemp = new Graphique("graphique", "Status", "Cube", "Temperature", "°C");


    /*---------------------------------------Méthode de la classe Graphique pour la Page Etat-------------------------*/
    var source = new EventSource("cgi-bin/cgiDiffuserTM.cgi");//modifier nom cgi: cgiDiffuserTM.cgi (TéléMesure)
    source.addEventListener("status", function(event) {
        gestionnaireCommandes.getHistorique();
	vueHistorique.afficherHistorique();
	var trame = JSON.parse(event.data);
        
        
        document.getElementById("CourantSortie").innerHTML = trame.status.batterie.CourantmA + "mA";
        graphBattCourant.ajouterMesure(genererDateCourante(), trame.status.batterie.CourantmA);
        document.getElementById("NiveauDeCharge").innerHTML = trame.status.batterie.NiveauCharge + "%";
        graphBattNivCharge.ajouterMesure(genererDateCourante(), trame.status.batterie.NiveauCharge);
        document.getElementById("TemperatureBatt").innerHTML = trame.status.batterie.Temperature + "°C";
        grahpBattTemp.ajouterMesure(genererDateCourante(), trame.status.batterie.Temperature);
        document.getElementById("TensionSortie").innerHTML = trame.status.batterie.TensionV + " V";
        graphBattTension.ajouterMesure(genererDateCourante(), trame.status.batterie.TensionV);

        
        document.getElementById("OccupationRAM").innerHTML = trame.status.bord.OccupationRAM + " %";
        graphBordRamUse.ajouterMesure(genererDateCourante(), trame.status.bord.OccupationRAM);
        document.getElementById("StockageSDLibreMo").innerHTML = trame.status.bord.StockageSDLibreMo + " Mo";
        graphStockSDLibreMo.ajouterMesure(genererDateCourante(), trame.status.bord.StockageSDLibreMo);
        document.getElementById("TemperatureBord").innerHTML = trame.status.bord.Temperature + "°C";
        grahpBordTemp.ajouterMesure(genererDateCourante(), trame.status.bord.Temperature);

        document.getElementById("TemperatureCube").innerHTML = trame.status.cube.Temperature + "°C";
        grahpCubeTemp.ajouterMesure(genererDateCourante(), trame.status.cube.Temperature);

    });

    source.addEventListener("mesure", function (evt) {
        var mesure = JSON.parse(evt.data);
        var camera = new CCamera();
        var matrice = new CMatrice(camera);
        gestionnaireCommandes.getHistorique();
        vueHistorique.afficherHistorique();


        switch (mesure.mesure.type) {
            case "matrice":
                camera.setPixel(mesure.mesure.matrice);
                matrice.majMatrice();
                break;

            case "normal":
                vueInstruments[getIndexVueInstrumentByCode(mesure.mesure.code)].update(mesure.mesure.code, genererDateCourante(), mesure.mesure.donnees);
                break;

            default:
                console.log("Erreur d'identification de l'instrument");
                console.log(mesure.mesure.type);
        }
    });
    
    function getIndexVueInstrumentByCode(code) {
        var numero;
        vueInstruments.forEach(function (element, index) {
            element.instrument.listeTypesMesure.forEach(function (element) {
                if (element.code === code) {
                    numero = index;
                }
            });
        });
        return numero;
    };

    function genererDateCourante() {
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var hh = today.getHours();
        var mn = today.getMinutes();
        var ss = today.getSeconds();
        if (hh < 10) {
            hh = '0' + hh;
        }

        if (mn < 10) {
            mn = '0' + mn;
        }
        if (ss < 10) {
            ss = '0' + ss;
        }

        today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mn + ':' + ss;
        return today;
    };
});
