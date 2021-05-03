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
        $.ajax({
            type: 'GET',
            url: 'cgi-bin/cgi_1',
            data: this.listeCommandes[this.listeCommandes.lenght - 1].genererJSON(),
            dataType: 'json',
            success: function(codeRecu) {
                popup(codeRecu)

            }
        });
    }

    getHistorique() {
        $(document).ready(function() {
            $.ajax({
                type: 'GET',
                url: 'cgi-bin/main',
                dataType: 'html',
                success: function(codeRecu) {
                    var tramesJson = new Array();
                    tramesJson = codeRecu.split('\n');

                    tramesJson.forEach(function(element) {
                        var test = $.parseJSON(element);
                        historique.push(new Commande(test.CMD.ID, test.CMD.TYPE, 0, test.CMD.TYPEMEASURE))
                    });
                    //document.getElementById("#textHC").innerHTML = test.
                }
            });
        });
    }
    afficherHistorique() {

        //this.historique.forEach( => console.log())
        $("#textHC").text("Afficher Historique");
    }

}