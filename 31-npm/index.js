var readlineSync = require('readline-sync');

var pet = {};

var name = readlineSync.question('Your pet name: ');
var gender = readlineSync.question('Gender (Male/Female): ');
var weight = readlineSync.question('weight?: ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet);

