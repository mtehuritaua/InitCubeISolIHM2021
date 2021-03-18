$(document).ready(function(){
	$("#buttonFlo").click(function(){
		$.ajax({
			type: 'GET',
			url: '../cgi-bin/cgiCommande.cgi',
			data : $("input[name=commande]").val(),
			dataType: 'html',
			success : function(codeRecu,statut){
				$("#resultat").append(codeRecu);
			}
			/*success : function(code_html, statut){
				$(code_html).appendTo("#commentaire");
			},
			error : function(resultat, statut, erreur){

      			}
			complete : function(resultat, statut){

       			}*/
		});
	});

});
