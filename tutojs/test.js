const array = [

    {
        name: 'Khadim',
        LastName: "Cisse",
        age: 22
    },

    {
        name: 'Kadem',
        LastName: "Garnier",
        age: 23
    }
];


function moi(objects, propertyName) {
    
    return objects.map(function (object) {

        return object[propertyName];

    });

}







console.log(moi(array, 'name')); 
console.log(moi(array, 'age'));