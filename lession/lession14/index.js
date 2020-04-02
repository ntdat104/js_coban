//TODO Học JSON object
//* stringify - Chuyển đổi 1 object sang JSON string
//* parse - Chuyển đổi 1 JSON string sang 1 object

var myDog = { name: "Milu", age: 1, dead: false };
var myDogString = JSON.stringify(myDog);

var myCatString = '{ "name": "Tom", "age": 2, "dead": true }';
var myCat = JSON.parse(myCatString);
console.log(myCat);