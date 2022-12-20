//Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

const fs = require("fs")                //Function

fs.readFile('text.txt', 'utf-8', (erreur, data) => {          //  Readfile est un fonction qui permet de lire un ficher--> contenue sauvegarder dans data
    if (erreur) {                                             //  Erreur 
        console.log(erreur)
        return                                              //  Sort de la condition
    }
    else {                                                  // Else pas obligatoire 
        console.log(data);                                  //Afficher le contenu du fiche (text.txt)
    }
}
)

//Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

let newData = "21"                                           //Variable qui sera le nouveau text dans le ficher en question

fs.writeFile('text.txt', newData, function (erreur) {       //  Fonction qui permet de modifie le contenue d'un ficher (regarde doc),
    if (erreur) {
        console.log('je rentre dans l\'erreur ', erreur);
    }
    console.log('Fichier mis à jour !');                    //  Afficher 
    console.log('Voici le nouveau text:', newData);          //Afficber le nouveau text
});



// 4 - Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.



const fs = require('fs');             // fonction

fs.readdir('.', (erreur, files) => {   // Appelle la fonction readdir passe en parametre erreur et la liste des ficher
    if (erreur) {                        //Message d'erreur
        console.log(erreur);
    }
    console.log(files);                 // Le ficher dans le repertoire courant
});

// 5 - Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

const fs = require('fs');                               

let name_File = "myFile.txt"                                //  Nom du ficher 
let contenu = "Mon contenue est bien present!"              //  Contenu du ficher
fs.appendFile(name_File, contenu, function (err) {          // Fonction pour ajouter un ficher dans le repertoire dans la quelle on se trouve
    if (err) throw err;
    console.log("Fichier créé et il s'appelle", name_File); //Afficher le nom du ficher
}); 
