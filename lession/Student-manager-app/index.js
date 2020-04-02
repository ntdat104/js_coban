/*
 * 1. Show all students
 * 2. Create a new students
 * 3. Save & Exit
 */

var readlineSync = require("readline-sync");
var fs = require("fs");

var students = [];

function loadDataFromJSON() {
  var data = fs.readFileSync("./data.json", { encoding: "UTF8" }); //TODO Đọc dữ liệu từ file data.json - Dữ liệu lấy ra là kiểu String
  students = JSON.parse(data); //TODO chuyển dữ liệu từ String thành Object rồi gán vào biến students.
}

function showStudents() {
  for (var student of students) {
    //TODO Vòng lặp for/of để lấy các thuộc tính trong mảng studens
    console.log(student.name, student.age);
  }
}

function creatStudent() {
  var name = readlineSync.question("Name: ");
  var age = readlineSync.question("Age: ");
  var student = {
    name: name,
    age: parseInt(age)
  };
  students.push(student); //TODO push student mới được tạo vào mảng students tổng.
}

function saveAndExit() {
  var data = JSON.stringify(students); //TODO chuyển dữ liệu từ Object thành String rồi gán vào biến data.
  fs.writeFileSync("./data.json", data, { encoding: "UTF8" }); //TODO Ghi dữ liệu dạng String vào file data.json
}

function showMenu() {
  console.log("1. Show all students");
  console.log("2. Create a new students");
  console.log("3. Save & Exit");

  var option = readlineSync.question("> ");
  switch (option) {
    case "1":
      showStudents();
      showMenu();
    case "2":
      creatStudent();
      showMenu();
    case "3":
      saveAndExit();
      break;
    default:
      console.log("Wrong option");
      showMenu();
  }
}

function main() {
  loadDataFromJSON();
  showMenu();
}

main();
