class VueHistorique {
    constructor(gestCommande) {
        this.gestCommande = gestCommande;
    }

    afficherHistorique() {
        let vuehistorique = this;
        this.gestCommande.historique.forEach(function (commande, index) {//Affiche les commandes dans la zone historique
            if(commande.typeCommande == "STATUS"){
                $('#listeHC').append('<li class="listehistorique" id="  ' + index + ' ">' + commande.idSatellite + ' ' + commande.typeCommande
                + ' ' + commande.dateEnvoi + '</li>');
            }else{
                $('#listeHC').append('<li class="listehistorique" id="  ' + index + ' ">' + commande.idSatellite + ' ' + commande.typeCommande
                + ' ' + commande.refInstrument + ' ' + commande.code + ' ' + commande.dateEnvoi + '</li>');
            }
        });
        var idCommande;

        $('.listehistorique').on('click', function () {
            idCommande = $(this).attr('id');
            vuehistorique.detaillerCommande(parseInt(idCommande));
        });
        $(".listehistorique").hover(function () { $(this).css("color", "#649AFF"); }, function () { $(this).css("color", "white"); });
    }

    detaillerCommande(idCommande) {
        let vuehistorique = this;
        $("#listeDHC").empty();//Efface les valeurs entrer, avant son utilisation    
        $("#comResu").empty();//Efface les valeurs entrer, avant son utilisation   

        //Détail de la commande
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Identifiant du SegmentVol</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">'+ vuehistorique.gestCommande.historique[idCommande].idSatellite + '\
        </div></div>');
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Type de la commande</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">'+ vuehistorique.gestCommande.historique[idCommande].typeCommande + '\
        </div></div>');
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Date d\'envoi</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">'+ vuehistorique.gestCommande.historique[idCommande].dateEnvoi + '\
        </div></div>');

        //Résultat de la commande
        if (vuehistorique.gestCommande.historique[idCommande].typeCommande == "MEASURE") {
            $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Type de la commande</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">'+ vuehistorique.gestCommande.historique[idCommande].refInstrument + '\
        </div></div>');
            $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Code de la commande</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">'+ vuehistorique.gestCommande.historique[idCommande].code + '\
        </div></div>');
            if (vuehistorique.gestCommande.historique[idCommande].code == "PIX") {
                $('#comResu').append('<table id="matrice">\
                                <thead>\
                                    <tr>\
                                        <th id="entete" COLSPAN=8>Caméra thermique</th>\
                                    </tr>\
                                </thead>\
                                <tbody>\
                                    <tr id="igne1"></tr>\
                                    <tr id="igne2"></tr>\
                                    <tr id="igne3"></tr>\
                                    <tr id="igne4"></tr>\
                                    <tr id="igne5"></tr>\
                                    <tr id="igne6"></tr>\
                                    <tr id="igne7"></tr>\
                                    <tr id="igne8"></tr>\
                                </tbody>\
                            </table>'
                );

                var pixel = 0;
                for (var y = 1; y < 9; y++) {
                    for (var i = 0; i < 8; i++) {
                        $("#igne" + y).append('<td id="ixel' + pixel + '"></td>');
                        pixel++;
                    };
                };


            } else if (vuehistorique.gestCommande.historique[idCommande].code == "TC") {
                $('#comResu').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
            Température</div></div><div class="ui-block-b">\
            <div class="ui-bar ui-bar-b" style="height:60px">'+ vuehistorique.gestCommande.historique[idCommande].reponse.mesure.donnees[0] + vuehistorique.gestCommande.historique[idCommande].reponse.mesure.unite + '\</div></div>');
            };
        } else if (vuehistorique.gestCommande.historique[idCommande].typeCommande == "STATUS") {
            /*$('#comResu').append('<div class="ui-grid-b">\
            <div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
            '+ 'Batterie' +'</div></div>\
            <div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">\
            '+ 'Charge' + '</div></div>\
            <div class="ui-block-c"><div class="ui-bar ui-bar-b" style="height:60px">\
            '+ vuehistorique.gestCommande.historique[idCommande].reponse.status.batterie.Charge +'</div></div>\
            <div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">\
            '+ 'CourantmA' + '</div></div>\
            <div class="ui-block-c"><div class="ui-bar ui-bar-b" style="height:60px">\
            '+ vuehistorique.gestCommande.historique[idCommande].reponse.status.batterie.CourantmA +'</div></div></div>');*/
        };
    }


}
