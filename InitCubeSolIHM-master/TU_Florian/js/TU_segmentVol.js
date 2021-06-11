class SegmentVol {
    constructor(urlFichierConf) {
        //console.log("instance d'un gestionnaire d'instruments url du fichier : " + urlFichierConf);
        this.urlFichierConf = urlFichierConf;
        this.listeInstruments = new Array();
        this.fichierConf = this.recupererFichierConf();
        //this.chargerInstruments();
        this.genererMenuInstruments();
    }

    //Cette méthode récupère le fichier XML avec une requete Ajax
    recupererFichierConf() {

    }

    //chargerInstruments permet de récupérer les informations des instruments dans le fichier XML
    /*chargerInstruments() {
        let segmentVolCourant = this;

        this.fichierConf.find('instrument').each(
            function() {

                segmentVolCourant.listeInstruments.push(new Instrument(nom, id, ref, adresse, role));

                $(this).find('typeMesure').each(
                    function() {

                        segmentVolCourant.listeInstruments[segmentVolCourant.listeInstruments.length - 1].addTypeMesure(nom, code, description, unite, valMin, valMax);
                    });
            });
    }*/

    //genererMenuInstruments ajoute les instruments au menu de la page instrument
    genererMenuInstruments() {

    }
}