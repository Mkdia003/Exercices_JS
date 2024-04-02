//Création d'une Classe Personne 

class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    presentation() {
        console.log("Bonjour, je m'appelle " + this.nom + " et j'ai " + this.age + " ans.");
    }
}

// Exemple d'utilisation de la classe Personne
const personne1 = new Personne("Malick Dia", 21);
personne1.presentation(); 
const personne2 = new Personne("Omar Laye Sow", 23);
personne2.presentation(); 


//Héritage
// Classe Etudiant qui étend de Personne
class Etudiant extends Personne {
    constructor(nom, age, niveau) {
        super(nom, age); // Appel du constructeur de la classe parente
        this.niveau = niveau;
    }

    afficherNiveau() {
        console.log("Je suis étudiant en niveau " + this.niveau + ".");
    }
}

// Exemple d'utilisation de la classe Etudiant
const etudiant1 = new Etudiant("Mariama Ndiaye", 23, "Licence");
etudiant1.presentation(); // sortie : Bonjour, je m'appelle Alice et j'ai 20 ans.
etudiant1.afficherNiveau(); // sortie : Je suis étudiant en niveau Licence.

const etudiant2 = new Etudiant("Aicha Mall", 18, "Terminal S2");
etudiant2.presentation(); // sortie : Bonjour, je m'appelle Bob et j'ai 22 ans.
etudiant2.afficherNiveau(); // sortie : Je suis étudiant en niveau Master.
