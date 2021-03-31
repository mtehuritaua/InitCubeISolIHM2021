class SegmentVol {
    constructor(urlFichierConf) {
        console.log("instance d'un gestionnaire d'instruments url du fichier : " + urlFichierConf);
        this.urlFichierConf = urlFichierConf;
        this.listeInstruments = new Array();
        console.log("<canvas id=\"instru" + this.type + this.source + "\"></canvas>");
        $("#instru").append("<div class=\"instruments\"><canvas id=\"instru" + this.type + "\"></canvas></div>");
    }

    recupererFichierConf() {
        $.ajax({
            type: "GET",
            url: this.urlFichierConf,
            dataType: "xml",
            success: function (xml) {
                $(xml).find('instrument').each(
                    function () {
                        var id = $(this).find('id').text();
                        console.log("l'identifiant de l'instrument : "+id);
                        var type = $(this).find('type').text();
                        console.log("type de l'instrument : "+type);
                        /*var url = $(this).find('url').text();
                        $('<div class="items" id="link_' + id + '"></div>').html('<a href="' + url + '">' + title + '</a>').appendTo('#Div_XML');
                        $(this).find('desc').each(
                            function () {
                                var brief = $(this).find('brief').text();
                                var long = $(this).find('long').text();
                                $('<div class="brief"></div>').html(brief).appendTo('#link_' + id);
                                $('<div class="long"></div>').html(long).appendTo('#link_' + id);
                            });*/
                    });
            }
        });
    }

    genererMenuInstruments() {
        console.log("Nouvel Instrument du fichier : initcube.xml");
        $("#Instrument").append("<div class=\"Instrument_1\">  <a href=\"#pageMagnetometre\"> <img src=\"images/Magnétomètre.png\" alt=\"Magnétomètre\" /> <br/> <span> Instrument </span> </a> </div>");
    }
}