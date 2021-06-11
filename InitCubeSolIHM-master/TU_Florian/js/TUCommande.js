// instanc
var maCommande = new Commande("1", "MEASURE", "CamInfra", "PIX", "0000/00/00 00:00:00", "non");

// afficher tous les attributs
console.log("Afficher les attributs : " + " " + maCommande.idSatellite + " " + maCommande.typeCommande + " " + maCommande.refInstrument + " " + maCommande.code);

// Test méthode setDate
maCommande.setDateEnvoi(genererDateCourante());

//Générer JSON
maCommande.genererJSON();