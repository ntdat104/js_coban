//TODO Học đọc và ghi file từ thư viện fs, hàm readFileSync
var fs = require("fs");

var dataFromJSON = fs.readFileSync("./data.json", { encoding:"UTF8" }); //TODO Đọc dữ liệu từ file data.json - Dữ liệu lấy ra là kiểu String
var students = JSON.parse(dataFromJSON); //TODO chuyển dữ liệu từ String thành Object rồi gán vào biến students.

console.log(students);

var studentString = JSON.stringify(students); //TODO chuyển dữ liệu từ Object thành String rồi gán vào biến studentString.
fs.writeFileSync("./data.json", studentString); //TODO Ghi dữ liệu dạng String vào file data.json

console.log(studentString);
