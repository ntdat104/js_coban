console.log("========== JAVASCRIPT CƠ BẢN ==========");
/*
 * Math.random();
 * Math.floor() - làm tròn xuống.
 * Math.cell() - làm tròn lên.
 * Math.round() - Làm tròn gần nhất.
 */
//==================================================================================================//
console.log("========== Bài 1: Biến và kiểu dữ liệu ==========");
//! Bài 1: Biến và kiểu dữ liệu

var firstName = "John";
var age = 28;

console.log("Biến firstName = ", firstName);
console.log("Biến age = ", age);

console.log(firstName + " " + age); //TODO ép kiểu age (số) =>> String (chuỗi)

var isMarried; //TODO Biến kiển luận lý True or False
isMarried = false;
job = "teacher";
console.log("isMarried = ", isMarried);

age = "twenty eight"; //TODO Đột biến giá trị (Lúc đầu age = 28, lúc sau age = 'twenty eight')
console.log(
  firstName + " is a " + age + " year old" + job + " Is married? " + isMarried
);

//TODO Toán tử trong JS
/*
 * x = y // x = y //? (Toán tử gán)
 * x += y // x = x + y //? (Cộng xong rồi gán)
 * x -= y // x = x - y //? (Trừ xong rồi gán)
 * x *= y // x = x * y //? (Nhân xong rồi gán)
 * x /= y // x = x / y //? (Chia xong rồi gán)
 * x % y // x = x % y //? (Chia lấy dư xong rồi gán)
 * x ** y // x = x ** y //? (Lũy thừa y xong rồi gán)
 * x++ // x = x + 1 //? (Cộng một xong rồi gán) !! Lấy giá trị trước rồi cộng sau
 * x-- // x = x - 1 //? (Trừ xong rồi gán) !! Lấy giá trị trước rồi trừ sau
 * ++x //? (Cộng trước rồi gán sau)
 * --x //? (Trừ trước rồi gán sau)
 */
var x, y;
x = 10;
y = 2;
console.log("x += y", (x += y));
console.log("x = ", x);

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

//==================================================================================================//
console.log("========== Bài 2: Câu lệnh If/Else trong Javascript ==========");
//! Bài 2: Câu lệnh If/Else trong Javascript

var firstname = "John";
var age = 18;

console.log("age = ", age);
console.log("age >= 20", age >= 20);
console.log("age < 30", age < 30);
console.log("!(age < 30)", !(age < 30));

console.log("age >= 20 && age < 30", age >= 20 && age < 30);
console.log("age >= 20 || age < 30", age >= 20 || age < 30);

if (age < 13) {
  console.log(firstname + " là một cậu học sinh");
} else if (age >= 13 && age <= 18) {
  console.log(firstname + " là một cậu bé tuổi teen");
} else if (age > 18 && age < 30) {
  console.log(firstname + " là một người đàn ông trung niên");
} else {
  console.log(firstname + " là một người đàn ông trưởng thành");
}

//==================================================================================================//
console.log("========= Bài 3: Câu lệnh Switch/Case trong Javascript =========");
//! Bài 3: Câu lệnh Switch/Case trong Javascript

//TODO Trường hợp 1
var job = "abc";

switch (job) {
  case "designer":
    console.log(firstname + " là một designer");
    break;
  case "worker":
    console.log(firstname + " là một worker");
    break;
  case "teacher":
    console.log(firstname + " là một teacher");
    break;
  default:
    console.log(firstname + " là một người có công việc nào đó???");
    break;
}

//TODO Trường hợp 2
var age = 20;

switch (true) {
  case age < 13:
    console.log(firstname + " là một cậu học sinh");
    break;
  case age >= 13 && age <= 18:
    console.log(firstname + " là một cậu bé tuổi teen");
    break;
  case age > 18 && age < 30:
    console.log(firstname + " là một người đàn ông trung niên");
    break;
  default:
    console.log(firstname + " là một người đàn ông trưởng thành");
    break;
}

//==================================================================================================//
console.log("========== Bài 4: Truthy, Falsy trong Javascript ==========");
//! Bài 4: Truthy, Falsy trong Javascript

var height;

if (height) {
  console.log("height có giá trị", height);
} else {
  console.log("height không có giá trị", height);
}

//TODO So sánh == và so sánh ===
var height2 = "23"; //* String

if (height2 == 23) {
  //? Chỉ so sánh giá trị và tự động ép kiểu để so sánh.
  console.log("Đúng");
} else {
  console.log("Sai");
}

if (height2 === 23) {
  //? So sánh cả kiểu dữ liệu và so sánh cả giá trị.
  console.log("Đúng");
} else {
  console.log("Sai");
}

//==================================================================================================//
console.log("========== Bài 5: Function trong Javascript ==========");
//! Bài 5: Function trong Javascript
//* Hàm là một đoạn chương trình độc lập, thực hiện một khối chức năng nhất định nào đó, sau khi thực hiện xong => Trả về một giá trị cho chương trình gọi nó. Chia nhỏ code.

var yearJohn = 0;

//* Cách 1:
function tinhTuoi(year) {
  //TODO Hàm trả về giá trị.
  //* Hàng loạt tính toán ...
  return 2020 - year;
}

function thayDoiNamSinh() {
  //TODO Hàm thủ tục.
  yearJohn = 2000;
}

thayDoiNamSinh(); //TODO Lời gọi hàm, Function call

var age = tinhTuoi(yearJohn); //TODO Biến age đang nhận giá trị trả về từ hàm tinhTuoi
console.log("Tuổi của John = ", age);

//* Cách 2:
var tinhtuoi2 = function(year) {
  //TODO tính toán
  return 2020 - year;
};

var thayDoiNamSinh2 = function(year) {
  yearJohn = 2001;
};

thayDoiNamSinh2(); //TODO Lời gọi hàm, Function call
var age = tinhtuoi2(yearJohn);
console.log("Tuổi của John2 = ", age);

//* Cách 3:
var tinhTuoi3 = year => {
  //TODO ...
  return 2020 - year;
};

var thayDoiNamSinh3 = () => {
  yearJohn = 2002;
};

thayDoiNamSinh3(); //TODO Lời gọi hàm, Function call
var age = tinhTuoi3(yearJohn);
console.log("Tuổi của John3 = ", age);

//TODO Tryền vào 2 tham số

function printContent(firstName, job) {
  switch (job) {
    case "teacher":
      console.log(firstname + " là một giáo viên!");
      break;
    case "designer":
      console.log(firstname + " là một người thiết kế!");
      break;
    default:
      console.log(firstname + " làm một công việc nào đó?");
      break;
  }
}

printContent("John", "designer");
printContent("John", "teacher");
printContent("John", "worker");

//==================================================================================================//
console.log("========== Bài 6: Array trong Javascript ==========");
//! Bài 6: Array trong Javascript

//? Để khai báo 1 Array có 2 cách

//* Cách 1
var arrStudent = ["Nguyễn Văn A", "Nguyễn Văn B", "Nguyễn Văn C"];
console.log("arrStudent = ", arrStudent);
console.log("arrStudent length = ", arrStudent.length);
console.log("arrStudent[0] = ", arrStudent[0]);
console.log("arrStudent[length - 1] = ", arrStudent[arrStudent.length - 1]);

//* Cách 2
var arrStudent2 = new Array("Nguyễn Văn A", "Nguyễn Văn B", "Nguyễn Văn C");
console.log("arrStudent2 = ", arrStudent2);
console.log("arrStudent2[2] = ", arrStudent2[2]);

//? Bản chất của Array trong Javascript là một Object
console.log(typeof arrStudent);

//TODO Truy xuất vào từng giá trị trong Array
var arrDemo = ["Nguyễn Văn A", 20, true, [123, 456, 789]];
console.log("arrDemo = ", arrDemo);
console.log("arrDemo[2] = ", arrDemo[2]);
console.log("arrDemo[3] = ", arrDemo[3]);
console.log("arrDemo[3][2] = ", arrDemo[3][2]);

//==================================================================================================//
console.log("========== Bài 7: Một số Methods cơ bản của Array ==========");
//! Bài 7: Một số Methods cơ bản của Array

var arrDemo = ["Smith", "John", 20, true, "John", "John", 2020];
var arrDemo2 = ["Đạt", "Hiếu", "Phúc"];
console.log("arrDemo = ", arrDemo);

//TODO Nối 2 Array lại với nhau.
console.log("arrDemo.concat(arrDemo2) = ", arrDemo.concat(arrDemo2));

//TODO Thêm 1 giá trị mới vào Array (Thêm vào vị trí sau cùng của Array), sau khi thêm thì trả về length mới của Array đó.
console.log("arrDemo.push(123) = ", arrDemo.push(123)); //* có thể thêm nhiều (123, 456)
console.log("arrDemo = ", arrDemo);

//TODO Thêm 1 giá trị mới vào Array (Thêm vào vị trí đầu tiên của Array), sau khi thêm thì trả về length mới của Array đó.
console.log("arrDemo.unshift(456) = ", arrDemo.unshift(456)); //* có thể thêm nhiều (456, 789)
console.log("arrDemo = ", arrDemo);

//TODO Xóa đi phần tử cuối cùng của Array đó, và trả về giá trị phần tử vừa xóa đó.
console.log("arrDemo.pop() = ", arrDemo.pop());
console.log("arrDemo = ", arrDemo);

//TODO Xóa đi phần tử đầu tiên của Array đó, và trả về giá trị phần tử vừa xóa đó.
console.log("arrDemo.shift() = ", arrDemo.shift());
console.log("arrDemo = ", arrDemo);

//TODO Dùng để tìm kiếm một phần tử nào đó có trong mảng Array không, và trả về chỉ số xuất hiện đầu tiên trong mảng.
console.log("arrDemo.indexOf('John') = ", arrDemo.indexOf("John"));
console.log("arrDemo.indexOf('Linda') = ", arrDemo.indexOf("Linda"));
console.log("arrDemo.lastIndexOf('John') = ", arrDemo.lastIndexOf("John"));
console.log("arrDemo.lastIndexOf('John') = ", arrDemo.lastIndexOf("Linda"));
/*
 * indexOf() => Tìm thấy vị trí xuất hiện đầu tiên của một phần tử => kiểm tra xem một phần tử có tồn tại trong Array hay không?
 * lastIndexOf() cũng tương tự nhưng trả về vị trí xuất hiện cuối cùng của mảng đó
 * + Nếu tồn tại => Trả về index xuất hiện đầu tiên của phần tử đó
 * + Nếu không tồn tại => Trả về -1
 * Nếu indexOf() = lastIndexOf() => Giá trị đó là duy nhất trong mảng.
 */

if (arrDemo.indexOf(true) !== -1) {
  console.log("John đã kết hôn.");
} else {
  console.log("John chưa kết hôn");
}

//TODO Truy suất vào chỉ số không hợp lệ trong mảng
console.log("arrDemo = ", arrDemo);
arrDemo[8] = "test";
console.log("arrDemo = ", arrDemo);
arrDemo[arrDemo.length] = "test2";
console.log("arrDemo = ", arrDemo);

//==================================================================================================//
console.log("========== Bài 8: Object trong Javascript ==========");
//! Bài 8: Object trong Javascript

//? Cách 1:

var student = {
  fullname: "Nguyễn Văn A",
  year: 2000,
  scores: {
    maths: 9,
    physics: 7.5,
    chemistry: 5
  },
  calAverage: function() {
    console.log("Run calAverage");

    var maths = this.scores.maths;
    var physics = this.scores.physics;
    var chemistry = this.scores.chemistry;

    return (maths + physics + chemistry) / 3;
  }
};

console.log("student = ", student);
console.log("fullName = ", student.fullname);
console.log("scores = ", student.scores);
console.log("scores.maths = ", student.scores.maths);
console.log("scores.physics = ", student.scores.physics);
console.log("scores.chemistry = ", student.scores.chemistry);

var average = student.calAverage(); //* Method của object student
console.log("average = ", average);

//* This -> Con trỏ this -> Trỏ tới đối tượng hiện tại.

//? Cách 2:

var student2 = new Object();
console.log("student2 = ", student2);

//* Thêm vào
student2.fullname = "Nguyễn Văn B";
student2.year = 2001;
student2.scores = {
  maths: 8,
  physics: 7,
  chemistry: 5
};
student2.calAverage = function() {
  console.log("Run calAverage");

  var maths = this.scores.maths;
  var physics = this.scores.physics;
  var chemistry = this.scores.chemistry;

  return (maths + physics + chemistry) / 3;
};
//TODO Cách khác: student2.calAverage = student.calAverage;
//* End

console.log("student2 = ", student2);
console.log("student2.calAverage() = ", student2.calAverage());
console.log("student2['fullname'] = ", student2["fullname"]);

//TODO Giải bài tập

function calBMI() {
  return this.mass / (this.height * this.height);
}

var john = {
  fullName: "John",
  mass: 59,
  height: 1.65,
  BMI: calBMI
};

var mark = {
  fullName: "Mark",
  mass: 69,
  height: 1.7,
  BMI: calBMI
};

console.log("BMI John = ", john.BMI());
console.log("BMI Mark = ", mark.BMI());

if (john.BMI() > mark.BMI()) {
  console.log("BMI của John lớn hơn BMI của Mark.");
} else if (john.BMI() < mark.BMI()) {
  console.log("BMI của Mark lớn hơn BMI của John.");
} else {
  console.log("BMI của John và Mark bằng nhau.");
}

//TODO Dùng function như tham số (Callback)
function funcBark(onFinish) {
  console.log("Barking...");
  onFinish();
}
function soundOfBarking() {
  console.log("Gâu Gâu Gâu.");
}
var myDog = {
  bark: funcBark
};

myDog.bark(soundOfBarking);

//==================================================================================================//
console.log("========== Bài 9: Vòng lặp trong Javascript ==========");
//! Bài 9: Vòng lặp trong Javascript

//TODO Lặp thông thường.
var i;
for (i = 0; i <= 10; i++) {
  console.log("i = ", i);
}
console.log("Giá trị của i sau khi chạy xong vòng lặp, i = ", i);

//TODO Lặp trong 1 object.

var john = ["john", "smith", 28, true];
console.log("John = ", john);
for (i = 0; i < john.length; i++) {
  console.log("Phần tử thứ " + (i + 1) + " = ", john[i]);
}

function calAverage() {
  this.average = (this.maths + this.physics) / 2; //TODO Truy xuất vào 1 phần tử ko hợp lệ thì tự thêm mới.
}

var arrStudents = [
  {
    fullName: "Nguyễn Văn A",
    maths: 9,
    physics: 5
  },
  {
    fullName: "Nguyễn Văn B",
    maths: 8,
    physics: 8
  },
  {
    fullName: "Nguyễn Văn C",
    maths: 7.6,
    physics: 5.2
  },
  {
    fullName: "Nguyễn Văn D",
    maths: 8.5,
    physics: 7.6
  }
];

for (var index = 0; index < arrStudents.length; index++) {
  arrStudents[index].calAverage = calAverage;
  //* Gán hàm calAverage vào từng object.
  arrStudents[index].calAverage();
  //* Gọi hàm calAverage thì tạo ra 1 thuộc tính nữa Average là điểm trung bình.
}
console.log("arrStudents = ", arrStudents);

//TODO Kiến thức For/of
var employees = [
  { name: "Thinh", age: 28 },
  { name: "Hiroshi", age: 26 },
  { name: "Maria", age: 32 }
];

for (var employee of employees) {
  //* Lặp trong một mảng.
  console.log(employee.name, employee.age);
}

//TODO Kiến thức For/in
console.log("==================================");
//* Mỗi học sinh có số lượng điểm khác nhau.
//* Object scores không phải là một mảng => Không có thuộc tính length

function calAverage() {
  var total = 0;
  var totalScores = 0;
  for (var key in this.scores) {
    //* Lặp trong một object.
    total += 1;
    totalScores += this.scores[key];
    console.log("scores " + key + " = ", this.scores[key]);
  }
  return totalScores / total;
}

var studentA = {
  fullName: "Nguyễn Văn A",
  year: 1992,
  scores: {
    maths: 9,
    physics: 7.5,
    chemistry: 5.4
  },
  calAverage2: calAverage
};

var studentB = {
  fullName: "Nguyễn Văn B",
  year: 1992,
  scores: {
    maths: 9,
    physics: 7.5,
    chemistry: 5.4,
    english: 6.5
  },
  calAverage2: calAverage
};

console.log("TB StudentA = ", studentA.calAverage2());
console.log("TB StudentB = ", studentB.calAverage2());
