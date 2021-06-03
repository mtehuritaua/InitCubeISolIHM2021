class VueConfigurationSV{
    constructor(gestConf){
        this.gestionnaireConfiguration=gestConf;

        this.vueInstruPotentiels = new VueInstrumentPotentiels(this.gestionnaireConfiguration.gestionnaireInstruments);
        this.vueInstruSV = new VueInstrumentsSV(this.gestionnaireConfiguration.segmentVol);
        
        let gestionnaireCourant = this;
        //Envoie la requete ajax lors de la validation
        $("#EnvoyerConf").click(function () {
            console.log("VUE CONF");
            gestionnaireCourant.gestionnaireConfiguration.transmettreConfSV; 
          });

        gestionnaireCourant.deplacerInstrument();
        //gestionnaireCourant.detailInstrument();
    }

    deplacerInstrument(){
        $("#removeListe").click(function () {          
            return !$('#instrumentExistant div :checked').closest('div').appendTo('#instrumentPotentiels');
          });

        $("#addListe").click(function () {           
            return !$('#instrumentPotentiels div :checked').closest('div').appendTo('#instrumentExistant');       
        });

    }

    detailInstrument(){
    
    }
}