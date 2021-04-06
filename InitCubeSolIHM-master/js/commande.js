class Commande {
    constructor(idSatellite, typeCommande, instrument, typeMesure) {
        this.idSatellite = idSatellite;
        this.typeCommande = typeCommande;
        this.instrument = instrument;
        this.typeMesure = typeMesure;
        console.log("Instanciation d'une commande " + idSatellite + " " + typeCommande + " " + instrument + " " + typeMesure);
    }
    setDate(date) {

    }
    genererJSON() {
        console.log("JSON fabriqué automatiquement : " + JSON.stringify(this));
        return cmd;
    }
}