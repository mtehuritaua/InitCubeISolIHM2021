var commande = new object
var json = JSON.stringify(commande);
console.log(json); //Cette ligne affiche le texte {trck : truck }.

// Envoi de l'objet FormData au serveur 
ajaxPost("https://run.mocky.io/v3/9434b594-e380-48ac-8655-4fc266e959f4", commande,
    function (reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur" + reponse);
    }
);


