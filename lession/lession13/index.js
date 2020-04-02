//TODO Học npm (Node Package Manager) và readlineSync
//* Cài đặt module readlineSync: npm install readline-sync --save

var readlineSync = require("readline-sync");

var Pet = {};
var name = readlineSync.question("Your pet name: ");
var gender = readlineSync.question("Pet gender (Male/Female): ");
var weight = readlineSync.question("Weight?: ");

Pet.name = name;
Pet.gender = gender;
Pet.weight = parseInt(weight);

console.log(Pet);
