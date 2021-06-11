$(document).ready(function() {

    /*-------------------------------------Segment Vol-----------------------------------------------------------------*/
    let segmentVol = new SegmentVol("TI_initcube.xml");


    /*-------------------------------------Gestionnaire de commandes ---------------------------------------------------*/
    let gestionnaireCommandes = new GestionnaireCommandes(segmentVol);
    let vueNouvelleCommande = new VueNouvelleCommande(gestionnaireCommandes);
});