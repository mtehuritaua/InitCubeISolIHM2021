$(document).ready(function() {
    $("#Bpopup").hide();
    $("#Mpopup").hide();
    $("#AbcVD").hide();

    $("#btnCommande").on("click", function() {
        var commande = $("#formulaireCommande").serializeArray({});

        var jsonString = JSON.stringify(commande);

        $.ajax({
            type: 'GET',
            url: 'cgi-bin/cgi_1',
            data: jsonString,
            dataType: 'html',
            success: function(codeRecu) {
                popup(codeRecu)
            }

        });

        function popup(value) {
            if (value == "ACK") {
                $("#Bpopup").fadeIn(200).delay(3000).fadeOut(400)

            } else if (value == "NACK")
                $("#Mpopup").fadeIn(200).delay(3000).fadeOut(400);
            else
                $("#AbcVD").fadeIn(200).delay(3000).fadeOut(400);

        }
    });
});