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

let newData ="21"
fs.writeFile('text.txt', newData, function (erreur) {
    if (erreur){
        console.log('je rentre dans l\'erreur ', erreur);
    }
    console.log('Fichier mis à jour !');
    console.log('Voici le nouveau text:',newData);
});