var commande = new FormData();

// Envoi de l'objet FormData au serveur 
ajaxPost("https://www.mocky.io/v2/5185415ba171ea3a00704eed", commande,
    function (reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur" + reponse);
    }
);
