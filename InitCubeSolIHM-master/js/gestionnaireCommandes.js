class GestionnaireCommandes {
    constructor() {
        this.listeCommandes = new Array();
        this.historique = new Array();
        console.log("Instanciation de la classe gestionnaireCommandes");
    }
    genererCommande() {
        this.listeCommandes.push(new Commande($('#IdSatellite').val(), $('#TypeCommande').val(), $('#Instru').val(), $('#TypeMesure').val()));
    }
    transmettreDerniereCommande() {
        $.ajax({
            type: 'GET',
            url: 'cgi-bin/cgi_1',
            data: this.listeCommandes[this.listeCommandes.lenght - 1].genererJSON(),
            dataType: 'json',
            success: function (codeRecu) {
                if (codeRecu == "ACK") {
                    $("#Bpopup").fadeIn(200).delay(3000).fadeOut(400)

                } else if (codeRecu == "NACK")
                    $("#Mpopup").fadeIn(200).delay(3000).fadeOut(400);
                else
                    $("#AbcVD").fadeIn(200).delay(3000).fadeOut(400);

            }
        });
    }

    getHistorique() {
        // $(document).ready(function() {
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
                    $("#listeHC").append('<li>' + parse.CMD.ID + '</li>');
                    ths.historique.push(new Commande(parse.CMD.ID, parse.CMD.TYPE, "0" , parse.CMD.TYPEMEASURE));
                });
            }
        });
        //});
    }

    afficherHistorique() { //Affiche l'objet de type commande dans le tableau historique
        let ths = this; 
        ths.historique.forEach(function (element) {
            $("#listeHC").append('<li>' + element.genererJSON + '</li>');
            //$("#listeHC").append(element.genererJSON);
            //$("#listeHC").append('</li>');
        })
    }

}