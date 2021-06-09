$(document).ready(function() {

    /*-------------------------------------Gestionnaire de commandes ---------------------------------------------------*/
    let gestionnaireCommandes = new GestionnaireCommandes();
    let vueHistorique = new VueHistorique(gestionnaireCommandes);

    gestionnaireCommandes.getHistorique(); //charge l'historique
    vueHistorique.afficherHistorique(); //affiche l'historique

});