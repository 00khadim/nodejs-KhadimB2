
const fs = require('fs');                               

let name_File = "myFile.txt"                                //  Nom du ficher 
let contenu = "Mon contenue est bien present!"              //  Contenu du ficher
fs.appendFile(name_File, contenu, function (err) {          // Fonction pour ajouter un ficher dans le repertoire dans la quelle on se trouve
    if (err) throw err;
    console.log("Fichier créé et il s'appelle", name_File); //Afficher le nom du ficher
}); 