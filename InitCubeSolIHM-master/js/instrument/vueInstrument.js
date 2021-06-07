class VueInstrument {
    constructor(instrument){
        this.instrument = instrument;
        this.graphiques = Array();
        //this.chargerVueInstruments();
        this.chargerHeader();
        this.chargerVue();
        this.chargerFooter();
    }
    
    /*chargerVueInstruments(){
        let vueCourante = this;

        $('body').append('<!--         ======================================  -->');
        $('body').append(`<!--                 page vue${this.instrument.ref}    -->`);
        $('body').append('<!--         ======================================  -->');
        $('body').append('<div data-role="page" id="page'+this.instrument.ref+'" class="general" data-theme="b">\
                            <div data-role="header" class="general"><img id="imgCnes" src="images/cnes.png" /></div>\
                            <div id="vue'+this.instrument.ref+'" class="general body"></div><div data-role="footer" data-position="fixed" data-tap-toggle="false" data-fullscreen="false" data-theme="b"><div data-role="navbar" data-grid="" data-iconpos="left"><ul id="menu"><li><a href="#pageEtat">Etat</a></li><li><a href="#pageInstruments"> Instruments</a></li><li><a href="#pageCommande">Commande</a></li><li><a href="#pageConfiguration"> Configuration</a></li></ul></div></div></div>');
        
        $("#vue"+this.instrument.ref).append('<div id="mesures'+this.instrument.ref+'"><table id="table'+this.instrument.ref+'"><tr id="typesMesures'+this.instrument.ref+'"></tr><tr id="valeursMesures'+this.instrument.ref+'"></tr></table></div><div id="graph'+this.instrument.ref+'" class="graphiques"></div>');
        this.instrument.listeTypesMesure.forEach(function(element,index){
            $("#typesMesures"+vueCourante.instrument.ref).append('<th class="typesMesures">Valeur '+element.nom+' ('+element.unite+') </th>');
            $("#valeursMesures"+vueCourante.instrument.ref).append('<td id="valeur'+vueCourante.instrument.ref+element.code+'"></td>');
            vueCourante.graphiques.push(new Graphique('graph'+vueCourante.instrument.ref+'',"Instrument",vueCourante.instrument.nom,element.nom,element.unite));
        });
    }*/

    chargerHeader(){
        $('body').append('<!--         ======================================  -->');
        $('body').append(`<!--                 page vue${this.instrument.ref}    -->`);
        $('body').append('<!--         ======================================  -->');
        $('body').append('<div data-role="page" id="page'+this.instrument.ref+'" data-theme="b">\
                            <div id="header" class="general">\
                                <img id="imgCnes" src="images/cnes.png" />\
                            </div>\
                            <div id="vue'+this.instrument.ref+'" class="general body">');
    }

    chargerVue(){
        let vueCourante = this;

        $("#vue"+this.instrument.ref).append('<div class="mesuresInstrument" id="mesures'+this.instrument.ref+'">\
                                                <table class="tableInstrument" id="table'+this.instrument.ref+'">\
                                                    <tr id="typesMesures'+this.instrument.ref+'"></tr>\
                                                    <tr id="valeursMesures'+this.instrument.ref+'"></tr>\
                                                </table></div>\
                                                <div id="graph'+this.instrument.ref+'" class="graphiques"></div>');

        this.instrument.listeTypesMesure.forEach(function(element,index){
            $("#typesMesures"+vueCourante.instrument.ref).append('<th class="typesMesures">Valeur '+element.nom+' ('+element.unite+') </th>');
            $("#valeursMesures"+vueCourante.instrument.ref).append('<td id="valeur'+vueCourante.instrument.ref+element.code+'"></td>');
            vueCourante.graphiques.push(new Graphique('graph'+vueCourante.instrument.ref+'',"Instrument",vueCourante.instrument.nom,element.nom,element.unite));
        });

    }

    chargerFooter(){
        $("#page"+this.instrument.ref).append('<div data-role="footer" data-position="fixed" data-tap-toggle="false" data-fullscreen="false" data-theme="b">\
                            <div data-role="navbar" data-grid="" data-iconpos="left">\
                                <ul id="menu">\
                                    <li><a href="#pageEtat">Etat</a></li>\
                                    <li><a href="#pageInstruments"> Instruments</a></li>\
                                    <li><a href="#pageCommande">Commande</a></li>\
                                    <li><a href="#pageConfiguration"> Configuration</a></li>\
                                </ul>\
                            </div>\
                        </div>');
    }

    updateMesures(){
        
    }

    updateGraphiques(){

    }
}

//$('body').append('<div data-role="page" id="page'+this.instrument.ref+'" class="general" data-theme="b"><div data-role="header" class="general"> \
                        //<img id="imgCnes" src="images/cnes.png" /> </div><div class="general body"> <div id="mesures'+this.instrument.ref'"><table id="tableMagneto"><tr><th class="valeurMagneto"><center>Valeur BX (μT)</center></th><th class="valeurMagneto"><center>Valeur BY (μT)</center></th><th class="valeurMagneto"><center>Valeur BZ (μT)</center></th></tr><tr><td id="ValeurMagnetoBX"></td><td id="ValeurMagnetoBY"></td><td id="ValeurMagnetoBZ"></td></tr></table></div><br /><div id="graph'+this.instrument.ref+' class="graphiques"></div></div><div data-role="footer" data-position="fixed" data-tap-toggle="false" data-fullscreen="false" data-theme="b"><div data-role="navbar" data-grid="" data-iconpos="left"><ul id="menu"><li><a href="#pageEtat">Etat</a></li><li><a href="#pageInstruments"> Instruments</a></li><li><a href="#pageCommande">Commande</a></li><li><a href="#pageConfiguration"> Configuration</a></li></ul></div></div></div>');
                        //<table id="tableMagneto"><tr><th class="valeurMagneto"><center>Valeur BX (μT)</center></th><th class="valeurMagneto"><center>Valeur BY (μT)</center></th><th class="valeurMagneto"><center>Valeur BZ (μT)</center></th></tr><tr><td id="ValeurMagnetoBX"></td><td id="ValeurMagnetoBY"></td><td id="ValeurMagnetoBZ"></td></tr></table></div>