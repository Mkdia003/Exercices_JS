// Calcul de l'IMC

// let poids = 70; // en kilogrammes
// let taille = 1.75; // en mètres
// let IMC = poids / (taille * taille);
// console.log("L'Indice de Masse Corporelle (IMC) est :", IMC);

let poids = 70; // en kilogrammes
let taille = 1.75; // en mètres

let IMC = (poids / (taille * taille)).toFixed(3);

console.log("L'Indice de Masse Corporelle (IMC) est :", IMC);

// Conversion de Température

let tempCelsius = 20; // Température en degrés Celsius

let tempFahrenheit = (tempCelsius * 9/5) + 32; // Conversion en degrés Fahrenheit

console.log("La température en degrés Fahrenheit est :", tempFahrenheit);
 