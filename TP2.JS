//Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

const fs = require("fs")

fs.readFile('text.txt', 'utf-8',(erreur, data) =>{
    if(erreur){
        console.log(erreur)
        return
    }
    else {
        console.log(data);
    }
}
) 

//Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

let newData ="21"
fs.writeFile('text.txt', newData, function (erreur) {
    if (erreur){
        console.log('je rentre dans l\'erreur ', erreur);
    }
    console.log('Fichier mis à jour !');
    console.log('Voici le nouveau text:',newData);
});



// 4 - Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.



const fs = require('fs');             // fonction

fs.readdir('.', (erreur, files) => {   // Appelle la fonction readdir passe en parametre erreur et la liste des ficher
    if(erreur){                        //Message d'erreur
        console.log(erreur);
    }
  console.log(files);                 // Le ficher dans le repertoire courant
});

// 5 - Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

