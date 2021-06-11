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

    /*let graphInstruMarche = new Graphique("graphique", "Status", "Instrument", "Marche");
    let graphInstruMode = new Graphique("graphique", "Status", "Instrument", "Mode");
    let grahpInstruTemp = new Graphique("graphique", "Status", "Instrument", "Temperature", "°C");
    let graphInstruErr = new Graphique("graphique", "Status", "Instrument", "erreur");*/

    /*--------------------------------------Graphiques de la page Magnétomètre-----------------------------------------*/
    //let graphMagnetoBX = new Graphique("graphMagnetometre", "Magnetometre", "ValeurBX", "Valeur", "μT");
    //let graphMagnetoBY = new Graphique("graphMagnetometre", "Magnetometre", "ValeurBY", "Valeur", "μT");
    //let graphMagnetoBZ = new Graphique("graphMagnetometre", "Magnetometre", "ValeurBZ", "Valeur", "μT");

    /*---------------------------------------Méthode de la classe Graphique pour la Page Etat-------------------------*/
    var source = new EventSource("cgi-bin/cgiDiffuserTM.cgi");//modifier nom cgi: cgiDiffuserTM.cgi (TéléMesure)
    source.addEventListener("status", function(event) {
        var trame = JSON.parse(event.data);
        
        /*document.getElementById("ChargeBatterie").innerHTML = trame.status.batterie.charge;
        graphBattCharge.ajouterMesure(genererDateCourante(), trame.status.batterie.charge);*/
        document.getElementById("CourantSortie").innerHTML = trame.status.batterie.CourantmA + "mA";
        graphBattCourant.ajouterMesure(genererDateCourante(), trame.status.batterie.CourantmA);
        document.getElementById("NiveauDeCharge%").innerHTML = trame.status.batterie.NiveauDeCharge% + "%";
        graphBattNivCharge.ajouterMesure(genererDateCourante(), trame.status.batterie.NiveauDeCharge + '%');
        document.getElementById("TemperatureBatt").innerHTML = trame.status.batterie.Temperature + "°C";
        grahpBattTemp.ajouterMesure(genererDateCourante(), trame.status.batterie.Temperature);
        document.getElementById("TensionSortie").innerHTML = trame.status.batterie.TensionV + " V";
        graphBattTension.ajouterMesure(genererDateCourante(), trame.status.batterie.TensionV);

        /*document.getElementById("Date/heureBord").innerHTML = trame.status.bord.Date/heureBord;
        graphBordDate.ajouterMesure(genererDateCourante(), trame.status.bord.Date/heureBord);*/
        document.getElementById("OccupationRAM%").innerHTML = trame.status.bord.OccupationRAM% + " %";
        graphBordRamUse.ajouterMesure(genererDateCourante(), trame.status.bord.OccupationRAM + '%');
        document.getElementById("StockageSDLibreMo").innerHTML = trame.status.bord.StockageSDLibreMo + " Mo";
        graphStockSDLibreMo.ajouterMesure(genererDateCourante(), trame.status.bord.StockageSDLibreMo);
        document.getElementById("TemperatureBord").innerHTML = trame.status.bord.Temperature + "°C";
        grahpBordTemp.ajouterMesure(genererDateCourante(), trame.status.bord.Temperature);

        document.getElementById("TemperatureCube").innerHTML = trame.status.cube.Temperature + "°C";
        grahpCubeTemp.ajouterMesure(genererDateCourante(), trame.status.cube.Temperature);

        /*document.getElementById("Marche").innerHTML = trame.status.instrument.Marche;
        graphInstruMarche.ajouterMesure(genererDateCourante(), trame.status.instrument.Marche);
        document.getElementById("Mode").innerHTML = trame.status.instrument.Mode;
        graphInstruMode.ajouterMesure(genererDateCourante(), trame.status.instrument.Mode);
        document.getElementById("Temperature").innerHTML = trame.status.instrument.Temperature + "°C";
        grahpInstruTemp.ajouterMesure(genererDateCourante(), trame.status.instrument.Temperature);
        document.getElementById("erreur").innerHTML = trame.status.instrument.erreur;
        graphInstruErr.ajouterMesure(genererDateCourante(), trame.status.instrument.erreur);*/
        
        
        /*document.getElementById("InfoCamera1").innerHTML = obj.camera.InfoCamera1;
        document.getElementById("InfoCamera2").innerHTML = obj.camera.InfoCamera2;*/

        if (trame.cameraIR == 0) {
            document.getElementById("CameraIR").innerHTML = "OFF";
        } else {
            document.getElementById("CameraIR").innerHTML = "ON";
        }
    });

    source.addEventListener("mesure", function (evt) {
        var mesure = JSON.parse(evt.data);
        //console.log("TRAME RECU : " + mesure);
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

                vueInstruments[getIndexVueInstrumentByCode(mesure.mesure.code)].update(mesure.mesure.code, genererDateCourante(), mesure.mesure.donnees);
                //vueInstruments[getIndexVueInstrumentByCode(mesure.mesure.code)].updateGraphiques(mesure.mesure.code, genererDateCourante(), mesure.mesure.donnees);
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
                    instru.instrument.mesure.ValeurMagnetoBZ + " μT";*/

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