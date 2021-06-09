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
        vueInstruments[index] = new VueInstrument(segmentVol.listeInstruments[index], gestionnaireCommandes); //Instanciation de la class VueInstrument
    });

    //test de mise à jour des mesures instruments
    /*vueInstruments.forEach(function(element) {
        element.updateMesures("BX","2021-06-06 15:45:20","52");
        element.updateMesures("BY","2021-06-06 15:45:20","130");
        element.updateMesures("BZ","2021-06-06 15:45:20","80");

        element.updateMesures("BX","2021-06-06 15:48:20","60");
        element.updateMesures("BY","2021-06-06 15:48:20","110");
        element.updateMesures("BZ","2021-06-06 15:48:20","100");

        element.updateGraphiques("BX","2021-06-06 15:45:20","52");
        element.updateGraphiques("BY","2021-06-06 15:45:20","130");
        element.updateGraphiques("BZ","2021-06-06 15:45:20","80");

        element.updateGraphiques("BX","2021-06-06 15:48:20","60");
        element.updateGraphiques("BY","2021-06-06 15:48:20","110");
        element.updateGraphiques("BZ","2021-06-06 15:48:20","100");
    });*/


    /*-------------------------------------Gestionnaire d'Instrument---------------------------------------------------*/
    let gestionnaireConfiguration = new GestionnaireConfiguration(segmentVol);
    let vueNvelleInstrument = new VueNouvelleInstrument();
    let vueConfSV = new VueConfigurationSV(gestionnaireConfiguration);

    /*-------------------------------------Graphiques de la page Etat--------------------------------------------------*/
    let graphBattCharge = new Graphique("graphique", "Etat", "Batterie", "Charge", "%");
    let graphBattTension = new Graphique("graphique", "Etat", "Batterie", "Tension", "V");
    let graphBattCourant = new Graphique("graphique", "Etat", "Batterie", "Courant", "A");
    let graphRAMuse = new Graphique("graphique", "Etat", "RAM", "Occupation", "%");
    let graphRAMdispo = new Graphique("graphique", "Etat", "RAM", "Disponile", "Mo");
    let graphStockLibreP = new Graphique("graphique", "Etat", "Stockage", "Libre", "%");
    let graphStockLibreM = new Graphique("graphique", "Etat", "Stockage", "Disponible", "Mo");

    /*--------------------------------------Graphiques de la page Magnétomètre-----------------------------------------*/
    //let graphMagnetoBX = new Graphique("graphMagnetometre", "Magnetometre", "ValeurBX", "Valeur", "μT");
    //let graphMagnetoBY = new Graphique("graphMagnetometre", "Magnetometre", "ValeurBY", "Valeur", "μT");
    //let graphMagnetoBZ = new Graphique("graphMagnetometre", "Magnetometre", "ValeurBZ", "Valeur", "μT");

    /*---------------------------------------Méthode de la classe Graphique pour la Page Etat-------------------------*/
    var source = new EventSource("cgi-bin/cgiDiffuserTM.cgi");//modifier nom cgi: cgiDiffuserTM.cgi (TéléMesure)
    source.addEventListener("status", function(event) {
        var trame = JSON.parse(event.data);
        document.getElementById("charge").innerHTML = trame.status.batterie.charge;
        
        document.getElementById("CourantSortie").innerHTML = trame.status.batterie.CourantmA + " mA";
        graphBattCourant.ajouterMesure(trame.date, trame.status.batterie.CourantmA);
        document.getElementById("ChargeBatterie").innerHTML = trame.status.batterie.NiveauDeCharge + " %";
        graphBattCharge.ajouterMesure(trame.date, trame.status.batterie.NiveauDeCharge);

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

    source.addEventListener("mesure", function (evt) {
        var mesure = JSON.parse(evt.data);
        console.log("TRAME RECU : " + mesure);
        var camera = new CCamera();
        var matrice = new CMatrice(camera);
        switch (mesure.mesure.type) {
            case "matrice":
                camera.setPixel(mesure.mesure.matrice);
                matrice.majMatrice();
                break;

            case "normal":
                //vueInstruments[0].test();
                //console.log("numéro de la vue demandée : "+getIndexVueInstrumentByCode(mesure.mesure.code));
                //console.log("numéro de la vue demandée : " + getIndexVueInstrumentByCode("BX"));

                vueInstruments[getIndexVueInstrumentByCode(mesure.mesure.code)].updateMesures(mesure.mesure.code, genererDateCourante(), mesure.mesure.donnees);
                vueInstruments[getIndexVueInstrumentByCode(mesure.mesure.code)].updateGraphiques(mesure.mesure.code, genererDateCourante(), mesure.mesure.donnees);
            //getVueInstrumentByCode(mesure.mesure.code).updateMesures(mesure.mesure.code, genererDateCourante(), mesure.mesure.donnees);
            
            /*case "magneto":
                //graphMagnetoBX.ajouterMesure()
                vueInstruments[1].graphiques[0].ajouterMesure(
                    instru.instrument.date,
                    instru.instrument.mesure.ValeurMagnetoBX
                );
                vueInstruments[1].graphiques[1].ajouterMesure(
                    instru.instrument.date,
                    instru.instrument.mesure.ValeurMagnetoBY
                );
                vueInstruments[1].graphiques[2].ajouterMesure(
                    instru.instrument.date,
                    instru.instrument.mesure.ValeurMagnetoBZ
                );

                document.getElementById("valeurMagnetometreBX").innerHTML =
                    instru.instrument.mesure.ValeurMagnetoBX + " μT";
                document.getElementById("valeurMagnetometreBY").innerHTML =
                    instru.instrument.mesure.ValeurMagnetoBY + " μT";
                document.getElementById("valeurMagnetometreBZ").innerHTML =
                    instru.instrument.mesure.ValeurMagnetoBZ + " μT";

                break;*/

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
        today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mn + ':' + ss;
        return today;
    };
});