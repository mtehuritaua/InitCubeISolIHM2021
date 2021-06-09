class GestionnaireCommandes {
    constructor(segVol) {
        this.segmentVol = segVol;
        this.listeCommandes = new Array();
        this.historique = new Array();
        this.datehistorique = new Array();
    }

    genererCommande(idSatellite, typeCommande, refInstrument, code) {
        this.listeCommandes.push(new Commande(idSatellite, typeCommande, refInstrument, code));
    }

    transmettreDerniereCommande() {
        let gestCourant = this;
        var retour;
        $.ajax({
            type: 'POST',
            url: 'cgi-bin/cgi_1',
            data: gestCourant.listeCommandes[gestCourant.listeCommandes.length - 1].genererJSON(),
            async: false,
            dataType: 'text',
            success: function(codeRecu) {
                retour = codeRecu;
            }
        });
        return retour;
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

                    gestionnaireCourant.historique.push(new Commande(commande.CMD.idSatellite, commande.CMD.typeCommande, commande.CMD.refInstrument, commande.CMD.code))
                    
                    //constructor(idSatellite, typeCommande, refInstrument, code)
                    gestionnaireCourant.historique[gestionnaireCourant.historique.length-1].setDateEnvoi(commande.CMD.dateEnvoi);
                    gestionnaireCourant.historique[gestionnaireCourant.historique.length-1].setReponse(commande.CMD.reponse);
                    //Ajoute une instanciation de commande dans le tableau historique.
                });
            }
        });

    }


}