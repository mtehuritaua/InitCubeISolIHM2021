class SegmentVol {
    constructor(urlFichierConf) {
        this.urlFichierConf = urlFichierConf;
        this.listeInstruments = new Array();
        this.fichierConf = this.recupererFichierConf();
        this.chargerInstruments();
    }

    recupererFichierConf() {
        var fichier = "<xml> Test </xml>"; 
        return fichier;
    }

    chargerInstruments(){ }

    genererMenuInstruments() { }
}