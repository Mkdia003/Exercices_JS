//Ajout et Suppression d'Éléments 
// Création d'un tableau
var mesSport = ['Football', 'Basketball', 'Tennis'];

// Ajout d'un nouvel élément à la fin du tableau
mesSport.push('Volleyball');
console.log(mesSport); // sortie : ['Football', 'Basketball', 'Tennis', 'Volleyball']

// Suppression du dernier élément du tableau
var elementSupprime = mesSport.pop();
console.log("L'élément supprimé est : " + elementSupprime); // sortie : 'Volleyball' (élément supprimé)
console.log(mesSport); // sortie :  ['Football', 'Basketball', 'Tennis']

// Ajout d'un nouvel élément au début du tableau
mesSport.unshift('Rugby');
console.log(mesSport); // sortie : ['Rugby', 'Football', 'Basketball', 'Tennis']

// Suppression du premier élément du tableau
var elementSupprime = mesSport.shift();
console.log("L'élément supprimé est : " + elementSupprime); // sortie : 'Rugby' (élément supprimé)
console.log(mesSport); // sortie : ['Football', 'Basketball', 'Tennis']