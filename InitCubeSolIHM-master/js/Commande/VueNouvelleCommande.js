class VueNouvelleCommande {
    constructor(gestCommandes) {
        let vueCommande = this;
        this.gestionnaireCommandes = gestCommandes;
        this.remplirMDInstruments();
        //this.remplirMDTypeMesure(0);
        $("#Bpopup").hide();
        $("#Mpopup").hide();
        $("#AbcVD").hide();
        $("#choixInstru").hide();
        $("#choixCode").hide();
        $("#choixDate").hide();
        $('#btnCommande').click(function() {
            vueCommande.onClickEnvoyerCommande();
        });
        $('#btnMatrice').click(function() {
            vueCommande.onClickCMDMatrice();
        });
        $('#btnTemperature').click(function() {
            vueCommande.onClickCMDTemperature();
        });
        $("#instru").on('click', function() {
            vueCommande.remplirMDTypeMesure(parseInt(this.value));
            $("#choixCode").show();
        });
        $("#typeCommande").on('click', function() {
            vueCommande.onChangeTypeCMD(this.value);
        });
    }

    // g         énère et transmet une commande quand on clique sur le bouton "valider"
    onClickEnvoyerCommande() {
        let vueCommande = this;
        vueCommande.gestionnaireCommandes.genererCommande($('#idSatellite').val(), $('#typeCommande').val(), this.gestionnaireCommandes.segmentVol.listeInstruments[$('#instru').val()].ref, $('#code').val());
        var retour = vueCommande.gestionnaireCommandes.transmettreDerniereCommande();
        vueCommande.popup(retour);
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
        $("#code-button span").text(vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure[0].code);
    }

    popup(value) {
        if (value == "ACK") {
            $("#Bpopup").fadeIn(200).delay(3000).fadeOut(400);
        } else
            $("#Mpopup").fadeIn(200).delay(3000).fadeOut(400);
    }

    onClickCMDMatrice() {
        let vueCommande = this;
        vueCommande.gestionnaireCommandes.genererCommande("1", "MEASURE", "CamInfra", "PIX");
        var commandeMat = vueCommande.gestionnaireCommandes.transmettreDerniereCommande();
        vueCommande.popup(commandeMat);
    }

    onClickCMDTemperature() {
        let vueCommande = this;
        vueCommande.gestionnaireCommandes.genererCommande("1", "MEASURE", "CamInfra", "TC");
        var commandeTemp = vueCommande.gestionnaireCommandes.transmettreDerniereCommande();
        vueCommande.popup(commandeTemp);
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
                $("#choixInstru").show();
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