class VueNouvelleCommande {
    constructor(gestionnaireCommandes) {
        let vueCommande = this;
        this.gestionnaireCommandes = gestionnaireCommandes;
        this.remplirMDInstruments();
        $('#btnCommande').click(function() {
            vueCommande.onClickEnvoyerCommande();
        });
        $("#instru").on('change', function() {
            vueCommande.remplirMDTypeMesure(parseInt(this.value));
        })
    }

    onClickEnvoyerCommande() {
        let vueCommande = this;
        vueCommande.gestionnaireCommandes.genererCommande($('#IdSatellite').val(), $('#TypeCommande').val(), this.gestionnaireCommandes.segmentVol.listeInstruments[$('#instru').val()].ref, $('#code').val());
        var retour = vueCommande.gestionnaireCommandes.transmettreDerniereCommande();
        vueCommande.popup(retour);
    }

    remplirMDInstruments() {
        let vueCommande = this;
        for (var i = 0; i < vueCommande.gestionnaireCommandes.segmentVol.listeInstruments.length; i++) {
            $("#instru").append('<option value ="' + i + '">' + vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[i].nom + '</option>');
        }
    }

    remplirMDTypeMesure(numInstrument) {
        // let numero = numInstrument;
        let vueCommande = this;
        $("#code").empty();
        for (var i = 0; i < vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure.length; i++) {
            $("#code").append('<option value ="' + vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure[i].code + '">' + vueCommande.gestionnaireCommandes.segmentVol.listeInstruments[numInstrument].listeTypesMesure[i].nom + '</option>');
        }
    }


    popup(value) {
        if (value == "ACK") {
            $("#Bpopup").fadeIn(200).delay(3000).fadeOut(400);
        } else if (value == "NACK")
            $("#Mpopup").fadeIn(200).delay(3000).fadeOut(400);
        else
            $("#AbcVD").fadeIn(200).delay(3000).fadeOut(400);
    }
}