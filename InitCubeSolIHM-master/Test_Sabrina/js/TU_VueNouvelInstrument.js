//var camera = new CCamera;
//var matrice = new CMatrice(camera);

$(document).ready(function() {

    /*---Segment Vol---*/
    let segmentVol = new SegmentVol("test.xml");
    
    /*---Gestionnaire d'Instrument---*/
    let gestionnaireConfiguration = new GestionnaireConfiguration(segmentVol);
    let vueNvelleInstrument = new VueNouvelleInstrument();   
   
});