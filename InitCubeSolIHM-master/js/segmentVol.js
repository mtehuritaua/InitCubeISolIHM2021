class SegmentVol {
  constructor(urlFichierConf) {
    //console.log("instance d'un gestionnaire d'instruments url du fichier : " + urlFichierConf);
    this.urlFichierConf = urlFichierConf;
    this.listeInstruments = new Array();
    this.fichierConf = this.recupererFichierConf();
    this.chargerInstruments();
    //console.log("<canvas id=\"instru" + this.type + this.source + "\"></canvas>");
    $("#instru").append(
      '<div class="instruments"><canvas id="instru' +
        this.type +
        '"></canvas></div>'
    );
  }

  recupererFichierConf() {
    var fichier;
    $.ajax({
      type: "GET",
      url: this.urlFichierConf,
      dataType: "xml",
      async: false,
      success: function (fichierXML) {
        fichier = $(fichierXML);
      },
    });
    return fichier;
  }

  chargerInstruments() {
    let segmentVolCourant = this;

    this.fichierConf.find("instrument").each(function () {
      var nom = $(this).find("description").find("nom").text();
      //console.log("nom de l'instrument : " + nom);
      var id = $(this).find("description").find("id").text();
      //console.log("l'identifiant de l'instrument : " + id);
      var ref = $(this).find("description").find("ref").text();
      //console.log("référence de l'instrument : " + ref);
      var adresse = $(this).find("description").find("adresse").text();
      //console.log("référence de l'instrument : " + ref);
      var role = $(this).find("description").find("role").text();
      //console.log("role de l'instrument : " + role);

      segmentVolCourant.listeInstruments.push(
        new Instrument(nom, id, ref, adresse, role)
      );

      $(this)
        .find("typeMesure")
        .each(function () {          
          var nom = $(this).find("nom").text();
          //console.log("nom du type de mesure : " + nom);
          var code = $(this).find("code").text();
          //console.log("code du type de mesure : " + code);
          var description = $(this).find("description").text();
          //console.log("description du type de mesure : " + description);
          var unite = $(this).find("unite").text();
          //console.log("unite du type de mesure : " + unite);
          var valMin = $(this).find("valMin").text();
          //console.log("valMin du type de mesure : " + valMin);
          var valMax = $(this).find("valMax").text();
          //console.log("valMax du type de mesure : " + valMax);
          segmentVolCourant.listeInstruments[
            segmentVolCourant.listeInstruments.length - 1
          ].addTypeMesure(nom, code, description, unite, valMin, valMax);
        });
      // console.log("caracteristique de l'instrument trouve dans le fichier de conf : ");
      // console.log(segmentVolCourant.listeInstruments[segmentVolCourant.listeInstruments.length-1].genererJSON());
    });
  }

  genererMenuInstruments() {
    //console.log("Nouvel Instrument du fichier : initcube.xml");
    for (var i = 0; i < this.listeInstruments.length; i++) {
      $("#Instrument").append(
        '<div class="Instrument_1"><a href="#page' +
          this.listeInstruments[i].ref +
          '"><img src="images/' +
          this.listeInstruments[i].ref +
          '.png"/><br/><span>' +
          this.listeInstruments[i].nom +
          "</span></a></div>"
      );
    }
  }
}
