console.log("========== Bài 9: Vòng lặp trong Javascript ==========");
//TODO Bài 9: Vòng lặp trong Javascript

//! Lặp thông thường.
var i;
for (i = 0; i <= 10; i++) {
  console.log("i = ", i);
}
console.log("Giá trị của i sau khi chạy xong vòng lặp, i = ", i);

//! Lặp trong 1 object.
var john = ["john", "smith", 28, true];
console.log("John = ", john);
for (i = 0; i < john.length; i++) {
  console.log("Phần tử thứ " + (i + 1) + " = ", john[i]);
}

function calAverage() {
  this.average = (this.maths + this.physics) / 2; //! Truy xuất vào 1 phần tử ko hợp lệ thì tự thêm mới.
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



