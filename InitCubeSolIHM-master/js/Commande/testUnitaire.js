class TestUnitaire {
    constructor(segVol) {
        this.segmentVol = segVol;
        this.gestCom = new GestionnaireCommandes();
        let vNCommande = new VueNouvelleCommande(this.gestCom);
        this.genererIntrumentsForm();
    }

    genererIntrumentsForm() {
        let testUni = this;
        for (var i = 0; i < this.segmentVol.listeInstruments.length; i++) {
            $("#instru").append('<option value ="' + testUni.segmentVol.listeInstruments[i].ref + '">' + testUni.segmentVol.listeInstruments[i].nom + '</option>');
        }
    }

    /*genererTypeM() {
        for (var i = 0; this.listeInstruments.length; i++) {
            $("code").append('<option value ="' + SegmentVol.listeInstruments[i].code + '">' + SegmentVol.listeInstruments[i].nom + '"</option>"');
        }

    }*/
}