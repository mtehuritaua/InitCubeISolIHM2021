class VueNouvelleCommande {
    constructor(gestionnaireCommande) {
        this.gestionnaireCommande = gestionnaireCommande;
    }

    onClickEnvoyerCommande() {
        gestionnaireCommandes.genererCommande($('#IdSatellite').val(), $('#TypeCommande').val(), $('#Instru').val(), $('#TypeMesure').val());
        var retour = gestionnaireCommandes.transmettreDerniereCommande();
        this.popup(retour);
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
}