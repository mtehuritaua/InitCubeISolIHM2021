class TestUnitaire {
    constructor() {
        let segVol = new SegmentVol();
        let gestCom = new GestionnaireCommandes();
        let vNCommande = new VueNouvelleCommande(gestCom);
    }


    genererIntrumentsForm() {
        console.log("test du formulaire dynamique");
        for (var i = 0; i < this.listeInstruments.length; i++) {
            $("Instru").append('<option value ="' + SegmentVol.listeInstruments[i].ref + '">' + SegmentVol.listeInstruments[i].nom + '"</option>"');
        }
    }

    genererTypeM() {
        for (var i = 0; this.listeInstruments.length; i++) {
            $("code").append('<option value ="' + SegmentVol.listeInstruments[i].code + '">' + SegmentVol.listeInstruments[i].nom + '"</option>"');
        }
    }
}
}