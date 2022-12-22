const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
''
rl.question("comment tu t'appelle ? ", (name) => {
    console.log(`BIENVENUE DANS LE QUIZ`, name,);
    console.log('');


    rl.question("Combien de fuseaux horaires y a-t-il en Russie ? ", (reponse) => {
        if(reponse ==='11'){
            console.log('bonne reponse');
        }
        
        
    });

    rl.question("Combien y a-t-il de rayures sur le drapeau américain? ", (reponse) => {
        if(reponse ==='13'){
            console.log('bonne reponse');
        }
        
        
    });


   /* rl.question('Please enter the second number : ', (answer2) => {
        //var result = (+answer1) + (+answer2);
        console.log(`The sum of above two numbers is ${result}`);
        rl.close();
    }); */
});



