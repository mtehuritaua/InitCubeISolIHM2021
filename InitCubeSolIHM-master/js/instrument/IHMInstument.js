class IHMInstrument {
  constructor() {
      // attributs
    this.nbTypesMesure = 1;
    this.nbTypesMesureRecap = 1;
    let gestionnaireCourant = this; //Créer variable car sinon certaine ne sont pas définie

    gestionnaireCourant.bloquerEcriture();
    gestionnaireCourant.ajouterFormTypeMesure();
    gestionnaireCourant.resetForm();
  }

  /*Bloquer écriture récapitulatif + IHM */
  bloquerEcriture() {
    $("#bloqueInput :input").prop("disabled", true);
  }

  /*Réinitialiser la page quand on clique sur bouton Annuler / Reset / EnvoieRecap + IHM*/
  resetForm() {
    $("#reset").click(function () {
      $("#form").trigger("reset");
    });
    $("#Annuler").click(function () {
      $("#form").trigger("reset");
    });
    $("#EnvoieRecap").click(function () {
      $("#form").trigger("reset");
    });
  }

  //Mettre nouveau id pour chaque type mesure ajouter + IHM
  ajouterFormTypeMesure() {
    let gestionnaireCourant = this;
    $("#Ajouter").click(function () {
      var add = $("#typeMesure0").clone().prop("id", 'typeMesure' + gestionnaireCourant.nbTypesMesure++);
      add.find('input').val('');
      add.appendTo("#new");

      //clone dans recap
<<<<<<< HEAD
      var addRecap = $("#addRecap").clone().attr("id",$("#addRecap")[0].id + gestionnaireCourant.nbTypesMesureRecap++);
=======
      var addRecap = $("#addRecap0").clone().prop("id", 'addRecap' + gestionnaireCourant.nbTypesMesureRecap++);
>>>>>>> 06d6144002ec41d5d155d8655c2a2c4e827fcf7e
      addRecap.appendTo("#newRecap");
    });
  }
}