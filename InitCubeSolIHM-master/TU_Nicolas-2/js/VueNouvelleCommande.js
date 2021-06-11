class VueNouvelleCommande {
    constructor() {
        $("#Bpopup").hide();
        $("#Mpopup").hide();
        $("#AbcVD").hide();
        //this.popup();
    }

    popup(value) {
        if (value == "ACK") {
            $("#Bpopup").fadeIn(200).delay(3000).fadeOut(400);
        } else
            $("#Mpopup").fadeIn(200).delay(3000).fadeOut(400);
    }
}