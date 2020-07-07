
var Mouse = require('./mouse');
var Cat = require('./cat');

var jerry = new Mouse('orange');
var mickey = new Mouse('black');

console.log(jerry);
console.log(mickey);

var tom = new Cat();
tom.eat(jerry);
tom.eat(mickey);

console.log(tom);