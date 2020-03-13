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
var tom = {
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

var m1 = new setMouse("m1", "Màu Xanh", 20);
var m2 = new setMouse("m2", "Màu Đỏ", 25);
var m3 = new setMouse("m3", "Màu Vàng", 30);

tom
  .eat(m1)
  .eat(m2)
  .eat(m3); //* Gọi nhiều lần trong 1 object bởi vì return this.

console.log("Tom = ", tom);

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
console.log(Mouse.prototype); //! Prototypes = thuộc tính.
console.log(Mouse.prototype.constructor);
console.log(Mouse.prototype.constructor === Mouse);

Mouse.prototype.sleep = function() {
  //* dùng cách này tiết kiệm bộ nhớ hơn
  console.log(this.color + " Sleeping ...");
};
var jerry = new Mouse("orange", 20);
console.log("jerry = ", jerry);
jerry.sleep();

var mickey = new Mouse("white", 10);
mickey.sleep();

console.log(jerry.sleep === mickey.sleep)
