class VueHistorique {
    constructor(gestCommande) {
        this.gestCommande = gestCommande;
        this.cameraHisto = new CCamera();
        this.matriceHisto = new CMatriceHistorique(this.cameraHisto);
    }

    afficherHistorique() {
        let vuehistorique = this;
        //Affiche les commandes dans la zone historique.
        this.gestCommande.historique.forEach(function (commande, index) {
            if(commande.typeCommande == "STATUS"){
                $('#listeHC').append('<li class="listehistorique" id="  ' + index + ' ">' 
                + commande.idSatellite + ' ' + commande.typeCommande+ ' ' 
                + commande.dateEnvoi + '</li>');
            }else{
                $('#listeHC').append('<li class="listehistorique" id="  ' + index + ' ">' 
                + commande.idSatellite  + ' ' + commande.typeCommande+ ' ' 
                + commande.refInstrument + ' ' + commande.code + ' ' + commande.dateEnvoi + '</li>');
            }
        });
        //Récupère l'identifiant de la ligne cliqué.
        var idCommande;
        $('.listehistorique').on('click', function () {
            idCommande = $(this).attr('id');
            vuehistorique.detaillerCommande(parseInt(idCommande));
        });
        $(".listehistorique").hover(function () { $(this).css("color", "#649AFF"); }, 
        function () { $(this).css("color", "white"); });
    }

    detaillerCommande(idCommande) {
        let vuehistorique = this;
        //Efface les valeurs entrer dans la zone détail, avant son utilisation  
        $("#listeDHC").empty();  
        //Efface les valeurs entrer dans la zone résultat, avant son utilisation
        $("#comResu").empty();   

        //Détail de la commande
        $('#listeDHC').append('<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar ui-bar-b" style="height:60px">\
        Identifiant du SegmentVol</div></div><div class="ui-block-b"><div class="ui-bar ui-bar-b" style="height:60px">' + vuehistorique.gestCommande.historique[idCommande].idSatellite + '\
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

                for (var y = 1; y < 9; y++) {
                    var pixel = 0;
                    for (var i = 0; i < 8; i++) {
                        $("#igne" + y).append('<td id="ixel' + pixel + '"></td>');
                        pixel = pixel++;
                    };
                };

                this.cameraHisto.setPixel(vuehistorique.gestCommande.historique[idCommande].reponse.mesure.matrice);
                matrice.majMatrice();


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
