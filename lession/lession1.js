console.log("========== Bài 1: Biến và kiểu dữ liệu ==========");
//TODO Bài 1: Biến và kiểu dữ liệu (Variables & Data Types)

var firstName = "John"; //* Biến kiểu string
var age = 28; //* Biến kiểu number

console.log("Biến firstName = ", firstName);
console.log("Biến age = ", age);

console.log(firstName + " " + age); //! ép kiểu age (số) =>> String (chuỗi)

var isMarried; //* Biến kiển luận lý True or False
isMarried = false;
job = "teacher";
console.log("isMarried = ", isMarried);

age = "twenty eight"; //! Đột biến giá trị (Lúc đầu age = 28, lúc sau age = "twenty eight")
console.log(
  firstName + " is a " + age + " year old" + job + " Is married? " + isMarried
);

//TODO Toán tử trong JS
/*
 * x = y // x = y //* (Toán tử gán)
 * x += y // x = x + y //* (Cộng xong rồi gán)
 * x -= y // x = x - y //* (Trừ xong rồi gán)
 * x *= y // x = x * y //* (Nhân xong rồi gán)
 * x /= y // x = x / y //* (Chia xong rồi gán)
 * x % y // x = x % y //* (Chia lấy dư xong rồi gán)
 * x ** y // x = x ** y //* (Lũy thừa y xong rồi gán)
 * x++ // x = x + 1 //* (Cộng một xong rồi gán) !! Lấy giá trị trước rồi cộng sau
 * x-- // x = x - 1 //* (Trừ xong rồi gán) !! Lấy giá trị trước rồi trừ sau
 * ++x //* (Cộng trước rồi gán sau)
 * --x //* (Trừ trước rồi gán sau)
 */
var a, b, sum;
a = 5;
b = 10;
sum = a++ * b-- + --a * ++b;
/*
 * a++ * b-- + --a * ++b; //! a = 5, b = 10
 * 5   * b-- + --a * ++b; //! a = 6, b = 10
 * 5   * 10  + --a * ++b; //! a = 6, b = 9
 * 5   * 10  + 5   * ++b; //! a = 5, b = 9
 * 5   * 10  + 5   * 10 ; //! a = 5, b = 10
 *     50    +    50    ; //! a = 5, b = 10
 */
console.log("sum = ", sum);

//TODO Toán tử typeof => Dùng để xác định kiểu dữ liệu của biến tại thời điểm đó.
console.log("typeof x = ", typeof x);
console.log("typeof firstName = ", typeof firstName);
console.log("typeof isMarried = ", typeof isMarried);

//TODO Toán tử so sánh - Tất cả các giá trị so sánh đều trả về true hoặc false
//* >,<,=,>=,<=,==,===,!=,!==

var number1 = 50;
var number2 = 150;
var average = (number1 + number2) / 2;
console.log("(50 + 150) / 2 = ", average);
