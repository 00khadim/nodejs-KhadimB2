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
