class GraphiqueInstru extends Graphique {
    constructor(idBalise, code, type, source, grandeur, unite) {
        super(idBalise, type, source, grandeur, unite);
        //code correspond à la commande liée au type de mesure d'un instrument
        //nécessaire pour associer la donnée reçue au bon graphique.
        this.code = code;
    }   
}