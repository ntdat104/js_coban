console.log("========== Bài 4: Truthy, Falsy trong Javascript ==========");
//TODO Bài 4: Truthy, Falsy trong Javascript

var height;

if (height) {
  console.log("height có giá trị", height);
} else {
  console.log("height không có giá trị", height);
}

//TODO So sánh == và so sánh ===
var height2 = "23"; //* String

if (height2 == 23) {
  //! Chỉ so sánh giá trị và tự động ép kiểu để so sánh.
  console.log("Đúng");
} else {
  console.log("Sai");
}

if (height2 === 23) {
  //! So sánh cả kiểu dữ liệu và so sánh cả giá trị.
  console.log("Đúng");
} else {
  console.log("Sai");
}