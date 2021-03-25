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
        let cmd = JSON.stringify({ CMD: { ID: this.idSatellite, TYPE: this.typeCommande, INSTRUMENT: this.instrument, TYPEMEASURE: this.typeMesure } });
        return cmd;
    }