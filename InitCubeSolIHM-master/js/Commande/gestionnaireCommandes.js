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
            success: function(codeRecu) {
                popup(codeRecu)

            }
        });
    }

    getHistorique() {
        console.log("Entrée dans getHistorique()");
        let gestionnaireCourant = this;

        $.ajax({
            type: 'GET', //Type méthode envoie.
            url: 'cgi-bin/main', //Localisation du cgi.
            async: false,
            dataType: 'html', //Type de retour.
            success: function(codeRecu) {
                var tramesJson = new Array(); // Creation tableau tramesJson.
                tramesJson = codeRecu.split(/\r?\n/); // Séparation du code reçu a chaque '\n'.

                tramesJson.forEach(function(test) {
                    //Parcour chaque element du tableau.
                    var commande = $.parseJSON(test) //Permet d'obetenir grace a la variable parse.

                    gestionnaireCourant.historique.push(new Commande(commande.CMD.ID, commande.CMD.TYPE, 0, commande.CMD.TYPEMEASURE))
                        //Ajoute une instanciation de commande dans le tableau historique.
                });
            }
        });

    }

    afficherHistorique() {

        console.log("Entrée dans afficherHisotrique()");

        this.historique.forEach(function(commande) { //Parcour chaque element du tableau.
            $('#listeHC').append('<li><a href = "#listeHC">' + commande.idSatellite + ' ' + commande.typeCommande +
                ' ' + commande.instrument + ' ' + commande.typeMesure + '</a></li>');

        });
    }

}