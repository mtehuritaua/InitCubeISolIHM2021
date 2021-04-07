class GestionnaireCommandes {
    constructor() {
        this.listeCommandes = new Array();
        this.historique = new Array();
        console.log("Instanciation de la classe gestionnaireCommandes");
    }
    genererCommande() {
        this.listeCommandes.push(new Commande($('#IdSatellite').val(), $('#TypeCommande').val(), $('#Instru').val(), $('#TypeMesure').val()));
    }
    getHistorique() {
        $(document).ready(function() {
            $.ajax({
                type: 'GET',
                url: 'cgi-bin/main',
                dataType: 'html',
                success: function(codeRecu) {

                    var test = JSON.parse(codeRecu);
                    //test.CMD = new Commande(test.ID, test.TYPE, test.TYPEMEASURE);
                    $("#textHC").text(test.CMD);
                    console.log(test);
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