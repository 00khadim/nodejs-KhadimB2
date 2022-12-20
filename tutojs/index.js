const fs = require('fs');             // fonction

fs.readdir('.', (erreur, files) => {   // Appelle la fonction readdir passe en parametre erreur et la liste des ficher
    if(erreur){                        //Message d'erreur
        console.log(erreur);
    }
  console.log(files);                 // Le ficher dans le repertoire courant
});