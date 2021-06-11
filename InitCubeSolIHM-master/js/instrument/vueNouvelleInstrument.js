class VueNouvelleInstrument {
  constructor() {
    this.nbTypesMesure = 1;
    this.nbTypesMesureRecap = 1;
    let gestionnaireCourant = this; //Créer variable car sinon certaine ne sont pas définie

    gestionnaireCourant.bloquerEcriture();
    gestionnaireCourant.resetForm();
    gestionnaireCourant.ajouterFormTypeMesure();
    gestionnaireCourant.supprimerFormTypeMesure();
  }

  /*Bloquer écriture récapitulatif + IHM */
  bloquerEcriture() {
    $("#bloqueInput :input").prop("disabled", true);
  }

  /*Réinitialiser la page quand on clique sur bouton Annuler / Reset / EnvoieRecap + IHM*/
  resetForm() {
    $("#reset").click(function () {
      $("#formulaire").trigger("reset");
    });
    $("#Annuler").click(function () {
      $("#formulaire").trigger("reset");      
    });
    $("#EnvoieRecap").click(function () {
      $("#formulaire").trigger("reset");
    });
  }

  //Mettre nouveau id pour chaque type mesure ajouter 
  ajouterFormTypeMesure() {
    let gestionnaireCourant = this;
    $("#Ajouter").click(function () {
      var add = $("#typeMesure0").clone().prop("id", "typeMesure" + gestionnaireCourant.nbTypesMesure++);
      add.find("input").val("");
      add.appendTo("#new");

      //clone dans recap
      var addRecap = $("#addRecap0").clone().prop("id", "addRecap" + gestionnaireCourant.nbTypesMesureRecap++);
      addRecap.appendTo("#newRecap");
    });
  }
  /*Permet de supprimer les types de mesures ajouter */
  supprimerFormTypeMesure() {    
    $("#Supprimer").click(function () {  
      let gestionnaireCourant = this   
      for (var i = 1; i < 10; i++) { 
        $('[id^="new"]').each(function () {
          $('#typeMesure' + i).remove();
          gestionnaireCourant.nbTypesMesure = 1;
        });
        $('[id^="newRecap"]').each(function () {
          $('#addRecap' + i).remove();
          gestionnaireCourant.nbTypesMesureRecap = 1;
        });
        }
    });
  }
}

