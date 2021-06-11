$(document).ready(function() {
    
    let lightSensor = new Instrument("lightSensor", "987TAH", "lightSensor", "0x95", "Mesurer l'intensité du rayonnement infrarouge et visible");
    lightSensor.addTypeMesure("Rayonnement Visible", "RVI", "description", "lux", "2", "20");
    lightSensor.addTypeMesure("Rayonnement Infra Rouge", "RIR", "description", "lux", "4", "40");

    let vueTest = new VueInstrument(lightSensor);
    location.href = "#pagelightSensor";

    var source = new EventSource("../cgi-bin/cgiDiffuserTM.cgi");

    source.addEventListener("mesure", function (evt) {
        var mesure = JSON.parse(evt.data);
        if (mesure.mesure.type == "normal") {
            if((mesure.mesure.code == "RVI") || (mesure.mesure.code == "RIR")){
                vueTest.update(mesure.mesure.code, genererDateCourante(), mesure.mesure.donnees);
            }
        }
    });

    function genererDateCourante() {
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var hh = today.getHours();
        var mn = today.getMinutes();
        var ss = today.getSeconds();
        if (hh < 10) {
            hh = '0' + hh;
        }

        if (mn < 10) {
            mn = '0' + mn;
        }
        if (ss < 10) {
            ss = '0' + ss;
        }

        today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mn + ':' + ss;
        return today;
    };
});