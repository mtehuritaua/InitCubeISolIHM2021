<script src="js/jquery-1.11.2.min.js"></script>
	<script src="js/jquery.serializeToJSON.js"></script>
	<script type="text/javascript">
	$(function(){
		$("#btnSerialize").on("click", function(){
			var commande = $("#myForm").serializeToJSON({
					
			});
			console.log(commande);
			
			var jsonString = JSON.stringify(commande);
			$("#result").val(jsonString);
		})
	});

	ajaxPost("https://www.mocky.io/v2/5185415ba171ea3a00704eed", commande,
    function (reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur" + reponse);
    }
);
</script>