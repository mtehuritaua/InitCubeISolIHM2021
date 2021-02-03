$( function() {
    $( "#dialog_ok" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "blind",
        duration: 1000
      }
    });
  
$( function() {
    $( "#datepicker" ).datepicker();
  });
   $(function popup(reponse) {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "slide",
        duration: 100
      },
      hide: {
        effect: "slide",
        duration: 100
      }
    });
	if (reponse=="ok") {
           //$( "#opener" ).on( "click", function () {
            $( "#dialog_ok" ).dialog( "open" );
           };
   });
       

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
		document.getElementById("demo").innerHTML = this.responseText ;
	 }
	};
	xhttp.open("GET", "../cgi-bin/testHM", true);
	xhttp.send();
}
  $( function () {
    $( "#sortable" ).sortable({
      revert: true
    });
$.post("http://localhost/cgi-bin/test_cgi", function (data) {
      alert("success");
    })
    .done(function (data) {
      $("#ajax").empty().append(data);
    });
    $( "#Commande0" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "#Commande1" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
$( "#Commande2" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
$( "#Commande3" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
$( "#Commande4" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
function c_envoie() {
    $.ajax( {
        url  : ("cgi-bin/Commande.cgi"),
        type : 'GET',
        data : "cmd="+"ok",
        dataType: "html",
	success : function(reponse){doc.alert(reponse)}
    } );
}

function c_envoi(cmd) {
    $.ajax( {
        url  : ("cgi-bin/Commande.cgi"),
        type : 'GET',                          
        data : "cmd=" +cmd,
        dataType: "html"
    } );

}
$( "#identifiantDuBouton" ).on( "click", c_envoi())
    $("ul, li" ).disableSelection();
  } );
$( "#opener" ).on( "click", function() {
      $( "#dialog_ok" ).dialog( "open" );
    });
  } );
