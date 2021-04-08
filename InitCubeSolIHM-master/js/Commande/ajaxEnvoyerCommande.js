$(document).ready(function () {
    $("#Bpopup").hide();
    $("#Mpopup").hide();
    $("#AbcVD").hide();

    $("#btnCommande").on("click", function () {
        var commande = $("#formulaireCommande").serializeArray({
        });        
        
        var jsonString = JSON.stringify(commande);

        $.ajax({
            type: 'GET',
            url: 'cgi-bin/cgi_1',
            data: jsonString,
            dataType: 'html',
            success: function (codeRecu) {
                if (codeRecu == "ACK") {
                    $("#Bpopup").fadeIn(200).delay(3000).fadeOut(400)

                }
                else if (codeRecu == "NACK")
                    $("#Mpopup").fadeIn(200).delay(3000).fadeOut(400);
                else
                    $("#AbcVD").fadeIn(200).delay(3000).fadeOut(400);

            }
        });
    });
});