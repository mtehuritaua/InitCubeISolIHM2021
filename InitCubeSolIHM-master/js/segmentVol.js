class SegmentVol {
    constructor(urlFichierConf) {
        console.log("instance d'un gestionnaire d'instruments url du fichier : " + urlFichierConf);
        this.urlFichierConf = urlFichierConf;
        this.listeInstruments = new Array();
        this.fichierConf;
        this.recupererFichierConf();
        this.chargerInstruments();
        console.log("<canvas id=\"instru" + this.type + this.source + "\"></canvas>");
        $("#instru").append("<div class=\"instruments\"><canvas id=\"instru" + this.type + "\"></canvas></div>");
    }

    recupererFichierConf() {
         $.ajax({
            type: "GET",
            url: this.urlFichierConf,
            dataType: "xml",
            async:false,
            success: function (fichierXML){
                this.fichierConf = $(fichierXML);
            }
        });
        console.log("fichier XML : " + fichierXML);
        //return fichierXML;
    }

    chargerInstruments(){
        fichierConf.find('instrument').each(
        function () {

            var id = $(this).find('id').text();
            console.log("l'identifiant de l'instrument : " + id);
            var nom = $(this).find('nom').text();
            console.log("nom de l'instrument : " + nom);
            var role = $(this).find('role').text();
            console.log("role de l'instrument : " + role);

            listeInstruments.push(Instrument(id,nom,role));
            
            this.fichierConf.find('typeMesure').each(
            function(){
                var nom = $(this).find(nom).text();
                console.log("nom du type de mesure : " + nom);
                var description = $(this).find(description).text();
                console.log("description du type de mesure : " + description);
                var unite = $(this).find(unite).text();
                console.log("unite du type de mesure : " + unite);
                var valMin = $(this).find(valMin).text();
                console.log("valMin du type de mesure : " + valMin);
                var valMax = $(this).find(valMax).text();
                console.log("valMax du type de mesure : " + valMax);

                this.listeInstruments[listeInstruments.length()-1].addTypeMesure(nom,description,unite,valMin,valMax);
            });
            console.log("caracteristique de l'instrument trouve dans le fichier de conf : ");
            console.log(this.listeInstruments[listeInstruments.length()-1].genererJSON());
        });
    }

    genererMenuInstruments() {
        console.log("Nouvel Instrument du fichier : initcube.xml");
        $("#Instrument").append("<div class=\"Instrument_1\">  <a href=\"#pageMagnetometre\"> <img src=\"images/Magnétomètre.png\" alt=\"Magnétomètre\" /> <br/> <span> Instrument </span> </a> </div>");
    }
}