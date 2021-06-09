class Commande {
    constructor(idSatellite, typeCommande, refInstrument, code) {
        this.idSatellite = idSatellite;
        this.typeCommande = typeCommande;
        this.refInstrument = refInstrument;
        this.code = code;
        this.dateEnvoi = "0000/00/00 00:00:00";
        this.reponse = "non";
        //this.dateExec = "0000/00/00 00:00:00";
        //this.periodicite = "0";
        //this.duree = "0";
        //this.save = "false";
        /* affichage console pour vérifier les attributs
        console.log("Instanciation d'une commande " + idSatellite + " " + typeCommande + " " + refInstrument + " " + code);*/
    }
    setDateEnvoi(date) {

    }

    setReponse(resultat) {}

    /*setDateExec() {
        this.dateExec=
    }*/

    genererJSON() {
        var cmd = "{\"CMD\":" + JSON.stringify(this) + "}";
        console.log("JSON fabriqué automatiquement : " + cmd);
        return cmd;
    }
}