class IHMInstrument {
  constructor() {
      // attributs
    this.nbTypesMesure = 0;
    this.nbTypesMesureRecap = 0;
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
      var add = $("#clone").clone().attr("id", $("#clone")[0].id + gestionnaireCourant.nbTypesMesure++);
      add.appendTo("#new");

      //clone dans recap
      var addRecap = $("#addRecap").clone().attr("id",$("#clone")[0].id + gestionnaireCourant.nbTypesMesureRecap++);
      addRecap.appendTo("#newRecap");
    });
  }
}