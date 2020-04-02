//TODO Học module.exports
var Mouse = require("./mouse");
var Cat = require("./cat");

var mickey = new Mouse("Black");
var jerry = new Mouse("orange");

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);