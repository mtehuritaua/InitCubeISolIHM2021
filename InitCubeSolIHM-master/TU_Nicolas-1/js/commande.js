class Commande {
    constructor(idSatellite, typeCommande, refInstrument, code) {
        this.idSatellite = idSatellite;
        this.typeCommande = typeCommande;
        this.refInstrument = refInstrument;
        this.code = code;
        this.dateEnvoi = "0000/00/00 00:00:00";
        this.reponse = "non";
    }
    setDateEnvoi(date) {
        this.dateEnvoi = date;
    }

    setReponse(resultat) {
        this.reponse = resultat;
    }

}