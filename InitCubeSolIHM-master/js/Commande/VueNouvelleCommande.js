class VueNouvelleCommande {
    constructor(gestCommandes) {
            let vueCommande = this;
            this.gestionnaireCommandes = gestCommandes;
            this.remplirMDInstruments();
            this.remplirMDTypeMesure(0);
            $('#btnCommande').click(function() {
                vueCommande.onClickEnvoyerCommande();
            });
            $('#btnCamInfra').click(function() {
                vueCommande.onClickCMDMatrice();
            });
            $("#instru").on('change', function() {
                vueCommande.remplirMDTypeMesure(parseInt(this.value));
            })
        }
        // génère et transmet une commande quand on clique sur le bouton "valider"
    onClickEnvoyerCommande() {
        let vueCommande = this;
        vueCommande.gestionnaireCommandes.genererCommande($('#idSatellite').val(), $('#typeCommande').val(), this.gestionnaireCommandes.segmentVol.listeInstruments[$('#instru').val()].ref, $('#code').val());
        var retour = vueCommande.gestionnaireCommandes.transmettreDerniereCommande();
        vueCommande.popup(retour);
    }

    // Charge les différents instruments du XML dans le menu déroulant
    remplirMDInstruments() {
        let vueCommande = this;
        for (var i = 0; i < vueCommande.gestionnaireCommandes.segmentVol.listeInstruments.length; i++) {
            $("#instru").append('<option value ="' + i + '">' + vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[i].ref + '</option>');
        }
    }

    // Charge les différents types de Mesure par rapport à l'instrument choisi
    remplirMDTypeMesure(numInstrument) {
        let vueCommande = this;
        $("#code").empty();
        for (var i = 0; i < vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure.length; i++) {
            $("#code").append('<option value ="' + vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure[i].nom + '">' + vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure[i].nom + '</option>');
        }
    }


    popup(value) {
        alert(value);
        if (value == "ACK") {
            $("#Bpopup").fadeIn(200).delay(3000).fadeOut(400);
        } else if (value == "NACK")
            $("#Mpopup").fadeIn(200).delay(3000).fadeOut(400);
        else
            $("#AbcVD").fadeIn(200).delay(3000).fadeOut(400);
    }

    onClickCMDMatrice() {
        let vueCommande = this;
        vueCommande.gestionnaireCommandes.genererCommande("1", "MEASURE", "CamInfra", "PIX");
        var commandeMat = vueCommande.gestionnaireCommandes.transmettreDerniereCommande();
        vueCommande.popup(commandeMat);
    }
}