class GestionnaireCommandes {
    constructor() {
        this.historique = new Array();
    }

    getHistorique() {
        console.log("Entrée dans getHistorique()");
        let gestionnaireCourant = this;
        var tramesJson = ['{ "CMD": { "idSatellite":"1", "typeCommande":"MEASURE", "refInstrument":"CamInfra", "code":"TC","dateEnvoi":"2021/04/25 15:17:19", "reponse":{"mesure": {"code":"TC", "donnees":["36.7"], "type":"normal", "unite":"°C"}}} }','{ "CMD": { "idSatellite":"1", "typeCommande":"MEASURE", "refInstrument":"CamInfra", "code":"PIX" ,"dateEnvoi":"2021/03/25 10:58:21", "reponse":"non" } }','{ "CMD": { "idSatellite":"1", "typeCommande":"STATUS" ,"dateEnvoi":"2021/03/25 10:58:21", "reponse":{"status": {"batterie": {"Charge":"OUI", "CourantmA":"1295", "NiveauCharge%":"96", "Temperature":"38.0", "TensionV":"4.1" }, "bord": {"Date/heureBord":"2021/03/31 15:00:07", "OccupationRAM%":"4", "StockageSDLibreMo":"6152068", "Temperature":"51.5" }, "cube": {"Temperature":"197.4" }, "instrument": {"Marche":"ON", "Mode":"NORMAL", "Temperature":"28.8", "erreur":"NON"}}} } }','{ "CMD": { "idSatellite":"1", "typeCommande":"MEASURE", "refInstrument":"CamInfra", "code":"TC" ,"dateEnvoi":"2021/06/12 08:47:05", "reponse":{"mesure": {"code":"TC", "donnees":["25.9"], "type":"normal", "unite":"°C"}} } }'];

        tramesJson.forEach(function(test){//Parcour chaque element du tableau.
            var commande = $.parseJSON(test) //Permet d'obetenir grace a la variable parse.

            gestionnaireCourant.historique.push(new Commande(commande.CMD.idSatellite, commande.CMD.typeCommande, commande.CMD.refInstrument, commande.CMD.code))
            gestionnaireCourant.historique[gestionnaireCourant.historique.length - 1].setDateEnvoi(commande.CMD.dateEnvoi); // = c;//.setDate(commande.DATE);
            gestionnaireCourant.historique[gestionnaireCourant.historique.length - 1].setReponse(commande.CMD.reponse); // = c;//.setDate(commande.DATE);
            //Ajoute une instanciation de commande dans le tableau historique.
        });



    }


}