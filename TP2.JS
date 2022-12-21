// 1 - Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

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


//--------------------------------------------------------------------------------------------------------------------------------------------------------






// 2 - Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

let newData = "21"                                           //Variable qui sera le nouveau text dans le ficher en question

fs.writeFile('text.txt', newData, function (erreur) {       //  Fonction qui permet de modifie le contenue d'un ficher (regarde doc),
    if (erreur) {
        console.log('je rentre dans l\'erreur ', erreur);
    }
    console.log('Fichier mis à jour !');                    //  Afficher 
    console.log('Voici le nouveau text:', newData);          //Afficber le nouveau text
});




//--------------------------------------------------------------------------------------------------------------------------------------------------------





// 3 - Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.



// importer lesmodules fs et http (regarde la doc)
const fs = require("fs");
const http = require('http');


//Creation du server 
http.createServer((httpRequest, httpReponse) => {

  console.log('request; ', httpRequest)

  fs.readFile("myFile.txt", "utf-8", (erreur, data) => {        //Où chercher le contenu à afficher
    if (erreur) {
      console.log(erreur);
      //return;
 
      // Erreur à afficher, avec le code 500 : reponse erreur serveur (Codes d'état de réponse HTTP)
      httpReponse.statusCode = 500;
      httpReponse.end('An error has occured.');
      return
    }
    httpReponse.setHeader('content-Type', 'text/plain');      //Type de contenu du ficher 
    httpReponse.end(data);                                      //Data = le contenu du ficher MyFile.txt

  })
}).listen(3000,() => {                                          //Port localhost dans la quelle sera present le l'erreur ou le contenu du ficher
    console.log('Server web listing on port 3000');
});




//--------------------------------------------------------------------------------------------------------------------------------------------------------







// 4 - Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.



const fs = require('fs');             // fonction

fs.readdir('.', (erreur, files) => {   // Appelle la fonction readdir passe en parametre erreur et la liste des ficher
    if (erreur) {                        //Message d'erreur
        console.log(erreur);
    }
    console.log(files);                 // Le ficher dans le repertoire courant
});



//--------------------------------------------------------------------------------------------------------------------------------------------------------





// 5 - Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

const fs = require('fs');                               

let name_File = "myFile.txt"                                //  Nom du ficher 
let contents = "Mon contenue est bien present!"              //  Contenu du ficher
fs.appendFile(name_File, contents, function (err) {          // Fonction pour ajouter un ficher dans le repertoire dans la quelle on se trouve
    if (err) throw err;
    console.log("Fichier créé et il s'appelle", name_File); //Afficher le nom du ficher
}); 




//--------------------------------------------------------------------------------------------------------------------------------------------------------



// 6 -Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.


const os = require('os');

const repertoire = os.homedir();           //repertoire personelle de l'user

console.log("Le repertoire courant est : ", repertoire);

//--------------------------------------------------------------------------------------------------------------------------------------------------------



// 7 - Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.


// 8 - Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.
// 9 Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.
// 10 - Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.


