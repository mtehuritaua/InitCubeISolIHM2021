class VueHistorique {
    constructor(gestCommande) {
        this.gestCommande = gestCommande;
        this.afficherHistorique(); //Affiche l'historique
    }

    afficherHistorique() {
        let vuehistorique = this;
        this.gestCommande.historique.forEach(function(commande, index) { //Affiche les commandes dans la zone historique
            $('#listeHC').append('<li class="listehistorique" id="  ' + index + ' ">' + commande.idSatellite + ' ' + commande.typeCommande +
                ' ' + commande.instrument + ' ' + commande.code + ' ' + commande.dateEnvoi + '</li>');
        });

        var idCommande;

        $('.listehistorique').on('click', function() {
            idCommande = $(this).attr('id');
            vuehistorique.detaillerCommande(parseInt(idCommande));
        });
        $(".listehistorique").hover(function() { $(this).css("color", "#649AFF"); }, function() { $(this).css("color", "white"); });
    }

    detaillerCommande(idCommande) {
        let vuehistorique = this;
        $("#listeDHC").empty(); //Efface les valeurs entrer, avant son utilisation      

        //Détail de la commande
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Identifiant du SegmentVol</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">' + vuehistorique.gestCommande.historique[idCommande].idSatellite + '\
        </div></div>');
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Type de la commande</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">' + vuehistorique.gestCommande.historique[idCommande].typeCommande + '\
        </div></div>');
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Code de la commande</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">' + vuehistorique.gestCommande.historique[idCommande].code + '\
        </div></div>');
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Date d\'envoi</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">' + vuehistorique.gestCommande.historique[idCommande].dateEnvoi + '\
        </div></div>');

        //Résultat de la commande
        //$('#comResu').append();

    }
}