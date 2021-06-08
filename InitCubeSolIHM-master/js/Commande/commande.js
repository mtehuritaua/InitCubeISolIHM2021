class Commande {
    constructor(idSatellite, typeCommande, refInstrument, code) {
        this.idSatellite = idSatellite;
        this.typeCommande = typeCommande;
        this.refInstrument = refInstrument;
        this.code = code;
        this.dateEnvoi = "0000/00/00 00:00:00";
        this.reponse = "non";
        console.log("Instanciation d'une commande " + idSatellite + " " + typeCommande + " " + refInstrument + " " + code);
    }
    setDateEnvoi(date) {
        this.dateEnvoi = date;
    }

    genererJSON() {
        var cmd = "{\"CMD\":" + JSON.stringify(this) + "}";
        console.log("JSON fabriqué automatiquement : " + cmd);
        return cmd;
    }

}