class Commande {
    constructor(idSatellite, typeCommande, instrument, code) {
        this.idSatellite = idSatellite;
        this.typeCommande = typeCommande;
        this.instrument = instrument;
        this.code = code;
        this.dateEnvoi = "0000/00/00 00:00:00";
        console.log("Instanciation d'une commande " + idSatellite + " " + typeCommande + " " + instrument + " " + code);
    }
    setDateEnvoi(date) {
        this.dateEnvoi = date;
    }

    genererJSON() {
        var cmd = "{ \"CMD\" : " + JSON.stringify(this) + "}";
        console.log("JSON fabriqué automatiquement : " + cmd);
        return cmd;
    }
    
}