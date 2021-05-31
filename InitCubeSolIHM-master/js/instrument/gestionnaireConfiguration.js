class GestionnaireConfiguration{
    constructor(){
        this.gestionnaireInstruments = new GestionnaireInstruments();
        let gestionnaireCourant = this;
        gestionnaireCourant.gestionnaireInstruments.listerInstrumentsPotentiels();
    }
}