// Calcul de l'aire d'un rectangle

function calculerAireRectangle(longueur, largeur) {
    // Calcule l'aire du rectangle en multipliant sa longueur par sa largeur
    var aire = longueur * largeur;
    return aire;
}

// Exemple d'utilisation de la fonction
var longueur = 50;
var largeur = 20;
var aire_resultante = calculerAireRectangle(longueur, largeur);
console.log("L'aire du rectangle avec une longueur de", longueur, "et une largeur de", largeur, "le resultat est de :", aire_resultante + " m²");


//Conversion Celsius vers Fahrenheit

function celsiusVersFahrenheit(celsius) {
    var fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

// Exemple d'utilisation de la fonction
var temperatureCelsius = 29;
var temperatureFahrenheit = celsiusVersFahrenheit(temperatureCelsius);
console.log(temperatureCelsius + " degrés Celsius équivaut à " + temperatureFahrenheit + " degrés Fahrenheit.");


//Vérification de nombre pair

function estPair(nombre) {
    return nombre % 2 === 0;
}

// Exemples d'utilisation de la fonction
console.log(estPair(4)); // sortie : true
console.log(estPair(7)); // sortie : false
