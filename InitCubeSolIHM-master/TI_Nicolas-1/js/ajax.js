$(document).ready(function() {
    $("#btnCommande").on("click", function() {
        var jsonString = '{"CMD":{"idSatellite":"1","typeCommande":"MEASURE","refInstrument":"CamInfra","code":"TC","dateEnvoi":"0000/00/00 00:00:00","reponse":"non"}}';
        $.ajax({
            type: 'POST',
            url: '../cgi-bin/cgiTransmettreCMD.cgi',
            data: jsonString,
            dataType: 'JSON',
            success: function(codeRecu) {
                alert(codeRecu);
            }
        });
    });
});