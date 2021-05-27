class Commande {
    constructor(idSatellite, typeCommande, instrument, code) {
        this.idSatellite = idSatellite;
        this.typeCommande = typeCommande;
        this.instrument = instrument;
        this.code = code;
        console.log("Instanciation d'une commande " + idSatellite + " " + typeCommande + " " + instrument + " " + code);
    }
    setDate(date) {

    }

    genererJSON() {
        var cmd = "{ \"CMD\" : " + JSON.stringify(this) + "}";
        console.log("JSON fabriqué automatiquement : " + cmd);
        return cmd;
    }
}