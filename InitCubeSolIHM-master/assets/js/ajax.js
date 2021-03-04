// Exécute un appel AJAX POST

// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès

function ajaxPost(url, data, callback) {

    var req = new XMLHttpRequest();

    req.open("GET", url);

    req.addEventListener("load", function () {

        if (req.status >= 200 && req.status < 400) {

            // Appelle la fonction callback en lui passant la réponse de la requête
            
            callback(req.status);
            
            

        } else {

            console.error(req.status + " " + req.statusText + " " + url);

        }

    });

    req.addEventListener("error", function () {

        console.error("Erreur réseau avec l'URL " + url);

    });

    req.send(data);

}
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



/*function callOtherDomain(){
    if(req){

    }
}*/

//Access-Control-Allow-Origin: https://www.mocky.io/v2/5185415ba171ea3a00704eed;
