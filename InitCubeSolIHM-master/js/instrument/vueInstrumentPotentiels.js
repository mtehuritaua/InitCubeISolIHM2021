class VueInstrumentPotentiels {
  constructor(gestInstrument) {
    this.gestionnaireInstru = gestInstrument;
    
    let gestionnaireCourant = this;
    gestionnaireCourant.genererListeInstruments();
  }

  
}