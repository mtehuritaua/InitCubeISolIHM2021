class Commande {
    constructor(idSatellite, typeCommande, instrument, typeMesure) {
        this.idSatellite = idSatellite;
        this.typeCommande = typeCommande;
        this.instrument = instrument;
        this.typeMesure = typeMesure;
        console.log("Instanciation d'une commande " + idSatellite + " " + typeCommande +  " " + instrument + " " + typeMesure);
    }
    setDate(date) {

    }
    genererJSON() {
        var cmd = JSON.stringify(this);
        console.log("JSON fabriqué automatiquement : " + cmd);
        return cmd;
    }
}