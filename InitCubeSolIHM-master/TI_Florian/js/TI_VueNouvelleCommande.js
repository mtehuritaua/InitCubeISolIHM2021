class VueNouvelleCommande {
    constructor(gestCommandes) {
        let vueCommande = this;
        this.gestionnaireCommandes = gestCommandes;
        this.remplirMDInstruments();
        this.remplirMDTypeMesure(0);
        $("#choixInstru").hide();
        $("#choixCode").hide();
        $("#choixDate").hide();
        $("#instru").on('click', function() {
            vueCommande.remplirMDTypeMesure(parseInt(this.value));
            $("#choixCode").show();
        });
        $("#typeCommande").on('click', function() {
            vueCommande.onChangeTypeCMD(this.value);
        });
    }

    // génère et transmet une commande quand on clique sur le bouton "valider"
    onClickEnvoyerCommande() {

    }

    // Charge les différents instruments du XML dans le menu déroulant
    remplirMDInstruments() {
        let vueCommande = this;
        $("#instru").empty();
        for (var i = 0; i < vueCommande.gestionnaireCommandes.segmentVol.listeInstruments.length; i++) {
            $("#instru").append('<option value ="' + i + '">' + vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[i].ref + '</option>');
        }
        $("#instru-button span").text(vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[0].ref);
    }

    // Charge les différents types de Mesure par rapport à l'instrument choisi
    remplirMDTypeMesure(numInstrument) {
        let vueCommande = this;
        $("#code").empty();
        for (var i = 0; i < vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure.length; i++) {
            $("#code").append('<option value ="' + vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure[i].code + '">' + vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure[i].code + '</option>');
        }
        //$("#code-button span").text(vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure[i].code);
    }

    popup(value) {

    }

    onClickCMDMatrice() {

    }

    onClickCMDTemperature() {

    }

    onChangeTypeCMD(typeChoisi) {
        switch (typeChoisi) {
            case 'MISSION':
                $("#choixInstru").show();
                $("#choixCode").hide();
                $("#choixDate").show();
                break;
            case 'MEASURE':
                $("#choixInstru").show();
                $("#choixCode").hide();
                $("#choixDate").hide();
                break;
            case 'STATUS':
                $("#choixInstru").hide();
                $("#choixCode").hide();
                $("#choixDate").hide();
                break;
            default:
                $("#choixInstru").hide();
                $("#choixCode").hide();
                $("#choixDate").hide();
                break;
        }
    }

}