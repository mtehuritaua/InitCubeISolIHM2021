$(document).ready(function () {
function popup(reponse) {
    $( "#dialog_nok" ).text(reponse);
    $( "#dialog_nok" ).dialog("open");
    };  

    $( function() {
        $( "#datepicker" ).datepicker();
      });
        
    $( function () {
        $( "#sortable" ).sortable({
              revert: true
          });
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


    function c_envoi(cmd) {
        $.ajax({
            url  : ("cgi-bin/Commande.cgi"),
            type : 'GET',                          
            data : "cmd="+cmd,
            dataType: "html",
        success : function(reponse){popup(reponse);}
        });
    }
    
        $( "#dialog_nok" ).dialog({
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



    $( "#envoiCommande" ).on("click",function(){
	var trame;
	const txt = document.getElementById ("sortable").getElementsByTagName ("li") [0].innerHTML;
	//if (txt === "MEASURE") {trame = "Trame MEASURE" }

	switch (txt) {
 		case "MEASURE":
			trame = "Trame MEASURE";
  		break;
 		case "STATUS":
			trame = "Trame STATUS" ;
  		break;
	}
	c_envoi(trame);
    });
});


// const txt = document.getElementById ("sortable").getElementsByTagName ("li") [0].innerHTML;
// if (txt === "MEASURE") {}
/*
swicth (txt) {
 case "MEASURE":

  break;
 case "STATUS":

  break;
}

*/
