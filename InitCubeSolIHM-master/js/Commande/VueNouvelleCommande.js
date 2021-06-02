class VueNouvelleCommande {
    constructor(gestionnaireCommandes) {
        let vueCommande = this;
        this.gestionnaireCommandes = gestionnaireCommandes;
        $('#btnCommande').click(function() {
            vueCommande.onClickEnvoyerCommande();
        });
    }

    onClickEnvoyerCommande() {
        let vueCommande = this;
        console.log(" valeurs du formulaire :" + " " + $('#IdSatellite').val() + " " + $('#TypeCommande').val());
        vueCommande.gestionnaireCommandes.genererCommande($('#IdSatellite').val(), $('#TypeCommande').val(), $('#Instru').val(), $('#code').val());
        var retour = vueCommande.gestionnaireCommandes.transmettreDerniereCommande();
        vueCommande.popup(retour);
    }

    popup(value) {
        if (value == "ACK") {
            $("#Bpopup").fadeIn(200).delay(3000).fadeOut(400)
        } else if (value == "NACK")
            $("#Mpopup").fadeIn(200).delay(3000).fadeOut(400);
        else
            $("#AbcVD").fadeIn(200).delay(3000).fadeOut(400);
    }
}