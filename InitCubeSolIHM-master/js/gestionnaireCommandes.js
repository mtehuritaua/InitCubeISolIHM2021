class GestionnaireCommandes {
    constructor() {
        this.listeCommandes = new Array();
        this.historique = new Array();
        console.log("Instanciation de la classe gestionnaireCommandes");
    }
    genererCommande(idSatellite, typeCommande, instrument, typeMesure) {
        this.listeCommandes.push(new Commande(idSatellite, typeCommande, instrument, typeMesure));
        //ajout de cette ligne dans VueNouvelleCommande
        //this.listeCommandes.push(new Commande($('#IdSatellite').val(), $('#TypeCommande').val(), $('#Instru').val(), $('#TypeMesure').val()));
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

    getHistorique() {
        $(document).ready(function () {
            let ths = this;
            $.ajax({
                type: 'GET',                                  //Type méthode envoie.
                url: 'cgi-bin/main',                          //Localisation du cgi.
                dataType: 'html',                             //Type de retour.
                success: function (codeRecu) {
                    var tramesJson = new Array();             // Creation tableau tramesJson.
                    tramesJson = codeRecu;
                    $('#listeHC').append('<li>'+tramesJson+'</li>')     // Séparation du code reçu a chaque '\n'.
                    tramesJson.forEach(function (element) {   //Parcour chaque element du tableau.
                        var parse = $.parseJSON(element)      //Permet d'obetenir grace a la variable parse.
                   
                        ths.historique.push(new Commande(test.CMD.ID, test.CMD.TYPE,0 , test.CMD.TYPEMEASURE))
                        //Ajoute une instanciation de commande dans le tableau historique.
                    });
                }
            });
        });
    }

    afficherHistorique() {                                                      
        this.historique.forEach(function (commande) { //Parcour chaque element du tableau.
            $('#listeHC').append('<li><a href = "#listeHC">' + commande.idSatellite + ' ' + commande.typeCommande
                + ' ' + commande.instrument + ' ' + commande.typeMesure + '</a></li>');

        });
    }

}