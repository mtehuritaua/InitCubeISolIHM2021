class VueHistorique {
    constructor(gestCommande) {
        this.gestCommande = gestCommande;
    }
    afficherHistorique() {
        let vuehistorique = this;
       // console.log("Entrée dans afficherHisotrique()");
        vuehistorique.gestCommande.historique.forEach(function (commande) {
            $('#listeHC').append('<li><a href = "#listeHC">' + commande.idSatellite + ' ' + commande.typeCommande
                + ' ' + commande.instrument + ' ' + commande.typeMesure + '</a></li>');

        });
    }

    detailHistorique(commande){
        
    }
}
