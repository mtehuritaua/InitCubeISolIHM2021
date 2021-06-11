console.log("********************************************************************************************************");
// instanciation de ma classe Commande
var maCommande = new Commande("1", "MEASURE", "CamInfra", "PIX", "0000/00/00 00:00:00", "non");
console.log("On instancie notre classe commande ");

console.log("********************************************************************************************************");
console.log("On affiche les attributs du nouvel objet : " + " " + maCommande.idSatellite + " " + maCommande.typeCommande + " " + maCommande.refInstrument + " " + maCommande.code);

console.log("********************************************************************************************************");

// Test méthode setDate
maCommande.setDateEnvoi(genererDateCourante());

//Générer JSON
maCommande.genererJSON();