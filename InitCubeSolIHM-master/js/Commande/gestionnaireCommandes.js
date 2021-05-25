class GestionnaireCommandes {
    constructor() {
        this.listeCommandes = new Array();
        this.historique = new Array();
        console.log("Instanciation de la classe gestionnaireCommandes");
    }
    genererCommande(idSatellite, typeCommande, instrument, code) {
        this.listeCommandes.push(new Commande(idSatellite, typeCommande, instrument, code));
        //ajout de cette ligne dans VueNouvelleCommande
        //this.listeCommandes.push(new Commande($('#IdSatellite').val(), $('#TypeCommande').val(), $('#Instru').val(), $('#code').val()));
    }

    transmettreDerniereCommande() {
        let gestCourant = this;
        $.ajax({
            type: 'POST',
            url: 'cgi-bin/cgi_1',
            data: gestCourant.listeCommandes[gestCourant.listeCommandes.length - 1].genererJSON(),
            dataType: 'json',
            success: function (codeRecu) {
                popup(codeRecu)

            }
        });
    }
/*
    getHistorique() {
        $(document).ready(function () {
            let ths = this;
            $.ajax({
                type: 'GET',
                url: 'cgi-bin/main',
                dataType: 'html',
                success: function (codeRecu) {
                    var tramesJson = new Array();
                    tramesJson = codeRecu.split('\n');

                    tramesJson.forEach(function (element) {
                        var parse = $.parseJSON(element);
                        //$("#listeHC").append('<li>'+element+'</li>');
                        //ths.historique.push(element);
                        const p; //= new Commande(parse.CMD.ID, parse.CMD.TYPE, parse.CMD.TYPEMEASURE, parse.CMD.TYPEMEASURE)
                        ths.addToHistorique(new Commande(parse.CMD.ID, parse.CMD.TYPE, parse.CMD.TYPEMEASURE, parse.CMD.TYPEMEASURE))
                        //$("#listeHC").append('<li>'+p.genererJSON+'</li>');
                    });
                }
            });

        });
    }*/

    addToHistorique(commande) {
        let ths = this;
        ths.historique.push(commande);
    }

    afficherHistorique() { //Affiche l'objet de type commande dans le tableau historique
        let ths = this;
        ths.historique.forEach(function (element) {
            
        })
        $("#listeHC").append('<li>test</li>');
    }

}