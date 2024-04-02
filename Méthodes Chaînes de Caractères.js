//Longueur d'une Chaîne
var maChaine = "Bonjour tout le monde !";

// Trouver la longueur de la chaîne de caractères
var longueurChaine = maChaine.length;
console.log("La longueur de la chaîne est :", longueurChaine); 

//Extraction d'une Sous-chaîne 
// Chaîne de caractères principale
var chainePrincipale = "Exemple de chaîne de caractères";

// Indice de début et de fin pour l'extraction de la sous-chaîne
var debut = 8;
var fin = 15;

// Extraction de la sous-chaîne à l'aide de la méthode substring()
var sousChaine1 = chainePrincipale.substring(debut, fin);
console.log("Sous-chaîne avec substring() :", sousChaine1); 

// Extraction de la sous-chaîne à l'aide de la méthode slice()
var sousChaine2 = chainePrincipale.slice(debut, fin);
console.log("Sous-chaîne avec slice() :", sousChaine2); 

//remplacement de Caractères
// Chaîne de caractères
var maChaine = "Bonjour tout le monde!";

// Remplacer "tout le" par "chère"
var nouvelleChaine = maChaine.replace("tout le", "chère");
console.log(nouvelleChaine); 
