console.log("========== Bài 10: Sử dụng key word 'new' ==========");
//TODO Bài 10: Sử dụng key word 'new'

//* var today = new Date();
//* Create a new object;

//! nomal function
var mouse = {
  weight: 0.2,
  getWeight: function() {
    return this.weight;
  }
};

//! contructor function
//* function Mouse(){ };
//* var mickey = new Mouse();
function Mouse(name, color, age) {
  this.type = "mouse";
  this.name = name;
  this.color = color;
  this.age = age;
}

//! use 'new'
var mouse1 = new Mouse("Nam", "Màu Xanh", 20);
var mouse2 = new Mouse("Đạt", "Màu Đỏ", 25);
var mouse3 = new Mouse("Tiến", "Màu Vàng", 30);
var mouse4 = new Mouse("Quỳnh", "Màu Trắng", 18);

console.log(mouse1);
console.log(mouse2);
console.log(mouse3);
console.log(mouse4);

//! Thực hành mèo và chuột
var cat = {
  name: "Tom",
  stomach: [],
  eat: function(mouse) {
    this.stomach.push(mouse);
    return this;
  }
};

function setMouse(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
}

var jerry1 = new setMouse("jerry1", "Màu Xanh", 20);
var jerry2 = new setMouse("jerry2", "Màu Đỏ", 25);
var jerry3 = new setMouse("jerry3", "Màu Vàng", 30);

cat.eat(jerry1).eat(jerry2).eat(jerry3); 
//* Gọi nhiều lần trong 1 object bởi vì return this.
//! Method chaining.

console.log("Tom = ", cat);

//! Prototypes in JavaScript - Nguyên mẫu trong javascript
function Mouse(color, weight) {
  this.type = "mouse";
  this.color = color;
  this.weight = weight;
  /*
   * this.sleep = function(){
   *     console.log("Sleeping ...");
   * }
   */
}
console.log(Mouse);
console.log(Mouse.prototype);
console.log(Mouse.prototype.constructor);
console.log(Mouse.prototype.constructor === Mouse);

Mouse.prototype.sleep = function() {
  //* dùng cách này tiết kiệm bộ nhớ hơn
  console.log(this.color + " Sleeping ...");
};

console.log(Mouse);

var jerry = new Mouse("orange", 20);
console.log("jerry = ", jerry);
jerry.sleep();

var mickey = new Mouse("white", 10);
mickey.sleep();

console.log(jerry.sleep === mickey.sleep);

//! JSON in Javascript
var myDog = { name: "Milu", age: 1, dead: false };
var myDogString = JSON.stringify(myDog);
console.log("typeof myDogString = ", typeof myDogString);
console.log("myDogString = ", myDogString);
//TODO chuyển từ object sang string

var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log("typeof myCat = ", typeof myCat);
console.log("myCat = ", myCat);
//TODO chuyển từ string sang object
