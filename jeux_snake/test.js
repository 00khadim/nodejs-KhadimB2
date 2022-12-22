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
        if (reponse === '11') {
            console.log('bonne reponse');
        }


        rl.question("Combien y a-t-il de rayures sur le drapeau américain? ", (reponse) => {
            if (reponse === '13') {
                console.log('bonne reponse');
            }


            rl.question("Quelle est la capitale du Canada? ", (reponse) => {
                if (reponse === 'Ottawa') {
                    console.log('bonne reponse');
                }


                rl.question("Quel est le nom de New York City Gergale, utilisé par ses habitants? ", (reponse) => {
                    if (reponse === 'Gotham') {
                        console.log('bonne reponse');
                    }


                    rl.question("La série de livres la plus vendue du XXIe siècle ? ", (reponse) => {
                        if (reponse === 'Harry Potter') {
                            console.log('bonne reponse');
                        }


                        rl.question("Quel artiste graffiti célèbre vient de Bristol? ", (reponse) => {
                            if (reponse === 'Bansky') {
                                console.log('bonne reponse');
                            }


                            rl.question("Quelle équipe de football est connue sous le nom de 'The Red Devils'? ", (reponse) => {
                                if (reponse === 'Manchester United') {
                                    console.log('bonne reponse');
                                }


                                rl.question("Quel pilote a remporté le plus grand nombre de championnats de Formule 1? ", (reponse) => {
                                    if (reponse === 'Michael Schumacher') {
                                        console.log('bonne reponse');
                                    }
                                });
                            });
                        });
                    });
                });
            });


        });


    });

})