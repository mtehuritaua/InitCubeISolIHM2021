class SegmentVol {
    constructor(urlFichierConf) {
        this.urlFichierConf = urlFichierConf;
        this.listeInstruments = new Array();
        this.fichierConf = this.recupererFichierConf();
        this.chargerInstruments();
        this.genererMenuInstruments();
    }

    //Cette méthode récupère le fichier XML avec une requete Ajax
    recupererFichierConf() {
        var fichier; 
        $.ajax({
            type: "GET",
            url: this.urlFichierConf,
            dataType: "xml",
            async:false,
            success: function (fichierXML){
                fichier = $(fichierXML);
            }
        });
        return fichier;
    }

    //chargerInstruments permet de récupérer les informations des instruments dans le fichier XML
    chargerInstruments(){
        let segmentVolCourant = this;

        this.fichierConf.find('instrument').each(
        function () {

            var nom = $(this).find('description').find('nom').text();
            var id = $(this).find('description').find('id').text();
            var ref = $(this).find('description').find('ref').text();            
            var adresse = $(this).find('description').find('adresse').text();
            var role = $(this).find('description').find('role').text();

            segmentVolCourant.listeInstruments.push(new Instrument(nom, id, ref, adresse, role));
            
            $(this).find('typeMesure').each(
            function(){

                var code = $(this).find('code').text();
                var nom = $(this).find('nom').text();
                var description = $(this).find('description').text();
                var unite = $(this).find('unite').text();
                var valMin = $(this).find('valMin').text();
                var valMax = $(this).find('valMax').text();

                segmentVolCourant.listeInstruments[segmentVolCourant.listeInstruments.length-1].addTypeMesure(nom, code ,description, unite, valMin, valMax);
            });
        });
    }

    genererMenuInstruments() {
    }
}