class GestionnaireConfiguration {
    constructor(segVol) {
      this.segmentVol = segVol;
      this.gestionnaireInstruments = new GestionnaireInstruments();
    }
  
    /*Genere une trame JSON avec toutes les données de la page configuration */
    genererConfigurationJSON() {
    }
  
    /*Création d'une requete ajax afin d'envoyer les données au script cgi suivant*/
    transmettreConfSV() {
    }

    /*Popup de confirmation de la reception du formulaire*/
    popupReception(value) {
  }
}
  