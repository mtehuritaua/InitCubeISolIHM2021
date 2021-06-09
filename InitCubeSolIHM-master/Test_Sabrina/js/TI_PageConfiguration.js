$(document).ready(function() {

    /*-------------------------------------Segment Vol-----------------------------------------------------------------*/
    let segmentVol = new SegmentVol("../../initcube.xml");

    /*-------------------------------------Gestionnaire d'Instrument---------------------------------------------------*/
    let gestionnaireConfiguration = new GestionnaireConfiguration(segmentVol);
    let vueConfSV = new VueConfigurationSV(gestionnaireConfiguration);
});