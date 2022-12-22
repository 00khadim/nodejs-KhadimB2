const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0
rl.question("comment tu t'appelle ? ", (name) => {
    console.log(`BIENVENUE DANS LE QUIZ`, name,);
    console.log('');


    rl.question("Combien de fuseaux horaires y a-t-il en Russie ? ", (reponse) => {
        if (reponse === '11') {
            score++
            console.log('bonne reponse');
            console.log(score);
        }


        rl.question("Combien y a-t-il de rayures sur le drapeau américain? ", (reponse) => {
            if (reponse === '13') {
                score++
                console.log('bonne reponse');
            }


            rl.question("Quelle est la capitale du Canada? ", (reponse) => {
                if (reponse === 'Ottawa') {
                    score++
                    console.log('bonne reponse');
                }


                rl.question("Quel est le nom de New York City Gergale, utilisé par ses habitants? ", (reponse) => {
                    if (reponse === 'Gotham') {
                        score++
                        console.log('bonne reponse');
                    }


                    rl.question("La série de livres la plus vendue du XXIe siècle ? ", (reponse) => {
                        if (reponse === 'Harry Potter') {
                            score++
                            console.log('bonne reponse');
                        }


                        rl.question("Quel artiste graffiti célèbre vient de Bristol? ", (reponse) => {
                            if (reponse === 'Bansky') {
                                score++ 
                                console.log('bonne reponse');
                            }


                            rl.question("Quelle équipe de football est connue sous le nom de 'The Red Devils'? ", (reponse) => {
                                if (reponse === 'Manchester United') {
                                    score++ 
                                    console.log('bonne reponse');
                                }


                                rl.question("Quel pilote a remporté le plus grand nombre de championnats de Formule 1? ", (reponse) => {
                                    if (reponse === 'Michael Schumacher') {
                                        score++ 
                                        console.log('bonne reponse');
                                    }

                                    rl.question("Dans quelle anne aété fondé Netflix? ", (reponse) => {
                                        if (reponse === '1997') {
                                            score++ 
                                            console.log('bonne reponse');
                                        }


                                        rl.question("Quelle est la ville de la tour Eiffel ?? ", (reponse) => {
                                            if (reponse === 'Paris') {
                                                score++ 
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


        });


    });

})