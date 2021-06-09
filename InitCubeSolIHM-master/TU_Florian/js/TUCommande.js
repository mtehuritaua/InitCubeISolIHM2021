// instanc
var maCommande = new Commande("1", "MEASURE", "CamInfra", "TC", "0000/00/00 00:00:00", "non");

// afficher tous les attributs
console.log("Afficher les attributs" + "" + idSatellite + " " + typeCommande + " " + refInstrument + " " + code);

// Test méthode setDate
maCommande.setDateEnvoi(genererDateCourante());

//Générer JSON
maCommande.genererJSON();