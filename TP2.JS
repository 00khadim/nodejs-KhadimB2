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