class VueHistorique {
    constructor(gestCommande) {
        this.gestCommande = gestCommande;
        this.afficherHistorique(); //Affiche l'historique
    }

    afficherHistorique() {
        let vuehistorique = this;
        console.log("Entrée dans afficherHisotrique()");
        this.gestCommande.historique.forEach(function(commande, index) {
            $('#listeHC').append('<li class="listehistorique" id="  ' + index + ' ">' + commande.idSatellite + ' ' + commande.typeCommande +
                ' ' + commande.instrument + ' ' + commande.code + ' ' + commande.dateEnvoi + '</li>');

        });

        var idCommande;
        $('.listehistorique').on('click', function() {
            idCommande = $(this).attr('id');
            vuehistorique.detaillerCommande(parseInt(idCommande));
        });
    }

    detaillerCommande(idCommande) {
        let vuehistorique = this;
        $("#listeDHC").empty();
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-a" style="height:60px">\
        Identifiant SegmentVol</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-a" style="height:60px">' + vuehistorique.gestCommande.historique[idCommande].idSatellite + '\
        </div></div>');
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-a" style="height:60px">\
        Type de la commande</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-a" style="height:60px">' + vuehistorique.gestCommande.historique[idCommande].typeCommande + '\
        </div></div>');
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-a" style="height:60px">\
        Code de la commande</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-a" style="height:60px">' + vuehistorique.gestCommande.historique[idCommande].code + '\
        </div></div>');
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-a" style="height:60px">\
        Date d envoi</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-a" style="height:60px">' + vuehistorique.gestCommande.historique[idCommande].dateEnvoi + '\
        </div></div>');

        //$('#listeDHC').append("L'identifiant du segment vol est" + vuehistorique.gestCommande.historique[idCommande].idSatellite );
        //$('#listeDHC').append("Le type de la commande est" + vuehistorique.gestCommande.historique[idCommande].typeCommande);
        //$('#listeDHC').append("Le code da la commande est" + vuehistorique.gestCommande.historique[idCommande].code);
        //$('#listeDHC').append("La dommande est envoyé au" + vuehistorique.gestCommande.historique[idCommande].dateEnvoi);

    }
}