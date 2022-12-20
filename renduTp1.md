1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme
    function somme (a, b) {
        c = a + b
        console.log(c);
    }
    somme (5,7)

2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
    const array = [2,4,6,67,6,4]

    function getMaxNumber(array) {
        const max = Math.max(...array);
        console.log(max);
        
    }
    getMaxNumber(array)

3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.
   function removeVowels(str) {

    return str.replace(/[aeiouyAEIOUY]/gi, "");

    

}
console.log(removeVowels("Salut"));

4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

    function alphabeticalOrder(str) {
        return str.sort();

        

    }
    console.log(alphabeticalOrder(["Maison", "Ordinateur", "Telephone", "Eau"])); 



const array = [

    {
        name: 'Khadim',
        LastName: "Cisse",
        age: 22
    },

    {
        name: 'Kadem',
        LastName: "CisGarnierse",
        age: 23
    }
];

.6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.


function moi(objects, propertyName) {
    
    return objects.map(function (object) {

        return object[propertyName];

    });

}