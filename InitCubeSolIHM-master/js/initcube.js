//var camera = new CCamera;
//var matrice = new CMatrice(camera);

$(document).ready(function () {
  /*-------------------------------------Gestionnaire de commandes ---------------------------------------------------*/
  let gestionnaireCommandes = new GestionnaireCommandes();
  $("#btnCommande").click(function () {
    gestionnaireCommandes.genererCommande();
    console.log(
      "Commande format JSON" +
        gestionnaireCommandes.listeCommandes[
          gestionnaireCommandes.listeCommandes.length - 1
        ].genererJSON()
    );
  });

  /*-------------------------------------Gestionnaire d'Instrument---------------------------------------------------*/
  let gestionnaireInstruments = new GestionnaireInstruments();
  $("#Ajouter").click(function () {
    var add = $('#test').clone();
    add.find('.champ');
    add.appendTo('#new');

/*-------------------------------------Gestionnaire de commandes ---------------------------------------------------*/
    let gestionnaireCommandes = new GestionnaireCommandes();
    $('#btnCommande').click(function () {
        gestionnaireCommandes.genererCommande();
        console.log("Commande format JSON" + gestionnaireCommandes.listeCommandes[gestionnaireCommandes.listeCommandes.length - 1].genererJSON());
    })

/*-------------------------------------Gestionnaire d'Instrument---------------------------------------------------*/
    let gestionnaireInstruments = new GestionnaireInstruments("../initcube.xml");
    gestionnaireInstruments.recupererFichierConf();
    $('#Envoyer').click(function () {
        gestionnaireInstruments.ajouterInstrument();
        gestionnaireInstruments.recapFormInstrument();
    })
    $("#stop :input").prop("disabled", true);

/*-------------------------------------Segment Vol-----------------------------------------------------------------*/
    let segmentVol = new SegmentVol("../initcube.xml");
    let segmentVol1 = new SegmentVol("../initcube.xml");

    segmentVol.genererMenuInstruments();

    segmentVol.chargerInstruments();
    
    
/*-------------------------------------Graphiques de la page Etat--------------------------------------------------*/
    let graphBattCharge = new Graphique("graphique", "Etat", "Batterie", "Charge", "%");
    let graphBattTension = new Graphique("graphique", "Etat", "Batterie", "Tension", "V");
    let graphBattCourant = new Graphique("graphique", "Etat", "Batterie", "Courant", "A");
    let graphRAMuse = new Graphique("graphique", "Etat", "RAM", "Occupation", "%");
    let graphRAMdispo = new Graphique("graphique", "Etat", "RAM", "Disponile", "Mo");
    let graphStockLibreP = new Graphique("graphique", "Etat", "Stockage", "Libre", "%");
    let graphStockLibreM = new Graphique("graphique", "Etat", "Stockage", "Disponible", "Mo");

/*--------------------------------------Graphiques de la page Magnétomètre-----------------------------------------*/
    let graphMagnetoBX = new Graphique("graphMagneto", "Magnetometre", "ValeurBX", "Valeur", "μT");
    let graphMagnetoBY = new Graphique("graphMagneto", "Magnetometre", "ValeurBY", "Valeur", "μT");
    let graphMagnetoBZ = new Graphique("graphMagneto", "Magnetometre", "ValeurBZ", "Valeur", "μT");

/*---------------------------------------Méthode de la classe Graphique pour la Page Etat-------------------------*/
    var source = new EventSource("cgi-bin/cubeEventServer.cgi");
    source.addEventListener("etat", function (event) {
        var obj = JSON.parse(event.data);
        document.getElementById("ChargeBatterie").innerHTML = obj.batterie.niveauDeCharge + " %";
        graphBattCharge.ajouterMesure(obj.date, obj.batterie.niveauDeCharge);
        document.getElementById("TensionSortie").innerHTML = obj.batterie.tension + " V";
        graphBattTension.ajouterMesure(obj.date, obj.batterie.tension);
        document.getElementById("CourantSortie").innerHTML = obj.batterie.courant + " mA";
        graphBattCourant.ajouterMesure(obj.date, obj.batterie.courant);
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
    var addRecap = $('#addRecap').clone();
    addRecap.find('.rajout');
    addRecap.appendTo('#addRecap');
  });/*
  $("#Supprimer").click(function () {
    var add = $('#new').bind();
    add.find('.champ');
    add.appendTo('#new');

    var addRecap = $('#addRecap').bind();
    addRecap.find('.rajout');
    addRecap.appendTo('#addRecap');
  });*/

  $("#stop :input").prop("disabled", true);

  $("#EnvoieRecap").click(function () {
    gestionnaireInstruments.ajouterInstrument();
    gestionnaireInstruments.recapFormInstrument();

    let form_data = $("#testForm").serializeArray();
    console.log(form_data);
    let jsonString = JSON.stringify(form_data);
    $.ajax({
      url: "cgi-bin/addInstrument.cgi",
      type: "POST",
      data: jsonString,
      dataType: "html",
      success: function (codeRecu) {
        console.log(" " + codeRecu);
      },
    });
  });

  /*-------------------------------------Segment Vol-----------------------------------------------------------------*/
  let segmentVol = new SegmentVol("../initcube.xml");
  let segmentVol1 = new SegmentVol("../initcube.xml");

  segmentVol.genererMenuInstruments();

  /*-------------------------------------Graphiques de la page Etat--------------------------------------------------*/
  let graphBattCharge = new Graphique(
    "graphique",
    "Etat",
    "Batterie",
    "Charge",
    "%"
  );
  let graphBattTension = new Graphique(
    "graphique",
    "Etat",
    "Batterie",
    "Tension",
    "V"
  );
  let graphBattCourant = new Graphique(
    "graphique",
    "Etat",
    "Batterie",
    "Courant",
    "A"
  );
  let graphRAMuse = new Graphique(
    "graphique",
    "Etat",
    "RAM",
    "Occupation",
    "%"
  );
  let graphRAMdispo = new Graphique(
    "graphique",
    "Etat",
    "RAM",
    "Disponile",
    "Mo"
  );
  let graphStockLibreP = new Graphique(
    "graphique",
    "Etat",
    "Stockage",
    "Libre",
    "%"
  );
  let graphStockLibreM = new Graphique(
    "graphique",
    "Etat",
    "Stockage",
    "Disponible",
    "Mo"
  );

  /*--------------------------------------Graphiques de la page Magnétomètre-----------------------------------------*/
  let graphMagnetoBX = new Graphique(
    "graphMagneto",
    "Magnetometre",
    "ValeurBX",
    "Valeur",
    "μT"
  );
  let graphMagnetoBY = new Graphique(
    "graphMagneto",
    "Magnetometre",
    "ValeurBY",
    "Valeur",
    "μT"
  );
  let graphMagnetoBZ = new Graphique(
    "graphMagneto",
    "Magnetometre",
    "ValeurBZ",
    "Valeur",
    "μT"
  );

  /*---------------------------------------Méthode de la classe Graphique pour la Page Etat-------------------------*/
  var source = new EventSource("cgi-bin/cubeEventServer.cgi");
  source.addEventListener("etat", function (event) {
    var obj = JSON.parse(event.data);
    document.getElementById("ChargeBatterie").innerHTML =
      obj.batterie.niveauDeCharge + " %";
    graphBattCharge.ajouterMesure(obj.date, obj.batterie.niveauDeCharge);
    document.getElementById("TensionSortie").innerHTML =
      obj.batterie.tension + " V";
    graphBattTension.ajouterMesure(obj.date, obj.batterie.tension);
    document.getElementById("CourantSortie").innerHTML =
      obj.batterie.courant + " mA";
    graphBattCourant.ajouterMesure(obj.date, obj.batterie.courant);
    document.getElementById("RamUse%").innerHTML =
      obj.memoire.occupMemoire + " %";
    graphRAMuse.ajouterMesure(obj.date, obj.memoire.occupMemoire);
    document.getElementById("RamDispo").innerHTML =
      obj.memoire.memoireDispoMo + " Mo";
    graphRAMdispo.ajouterMesure(obj.date, obj.memoire.memoireDispoMo);
    document.getElementById("StockLibre%").innerHTML =
      obj.stockage.stockLibreEnP + " %";
    graphStockLibreP.ajouterMesure(obj.date, obj.stockage.stockLibreEnP);
    document.getElementById("StockLibreMo").innerHTML =
      obj.stockage.stockLibreMo + " Mo";
    graphStockLibreM.ajouterMesure(obj.date, obj.stockage.stockLibreMo);
    document.getElementById("InfoCamera1").innerHTML = obj.camera.InfoCamera1;
    document.getElementById("InfoCamera2").innerHTML = obj.camera.InfoCamera2;

    if (obj.cameraIR == 0) {
      document.getElementById("CameraIR").innerHTML = "OFF";
    } else {
      document.getElementById("CameraIR").innerHTML = "ON";
    }
  });

  source.addEventListener("instrument", function (evt) {
    var instru = JSON.parse(evt.data);
    var camera = new CCamera();
    var matrice = new CMatrice(camera);
    switch (instru.instrument.type) {
      case "matrice":
        camera.setPixel(instru.instrument.mesure);
        matrice.majMatrice();
        break;
      case "magneto":
        graphMagnetoBX.ajouterMesure(
          instru.instrument.date,
          instru.instrument.mesure.ValeurMagnetoBX
        );
        graphMagnetoBY.ajouterMesure(
          instru.instrument.date,
          instru.instrument.mesure.ValeurMagnetoBY
        );
        graphMagnetoBZ.ajouterMesure(
          instru.instrument.date,
          instru.instrument.mesure.ValeurMagnetoBZ
        );

        document.getElementById("ValeurMagnetoBX").innerHTML =
          instru.instrument.mesure.ValeurMagnetoBX + " μT";
        document.getElementById("ValeurMagnetoBY").innerHTML =
          instru.instrument.mesure.ValeurMagnetoBY + " μT";
        document.getElementById("ValeurMagnetoBZ").innerHTML =
          instru.instrument.mesure.ValeurMagnetoBZ + " μT";

        break;
      default:
        console.log("Erreur d'identification de l'instrument");
        console.log(instru.instrument.type);
    }
  });
});