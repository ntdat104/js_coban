console.log("========== Bài 5: Function trong Javascript ==========");
//TODO Bài 5: Function trong Javascript
//* Hàm là một đoạn chương trình độc lập, thực hiện một khối chức năng nhất định nào đó, sau khi thực hiện xong => Trả về một giá trị cho chương trình gọi nó. Chia nhỏ code.

var yearJohn = 0;

//TODO Cách 1:
function tinhTuoi(year) {
  //! Hàm trả về giá trị.
  //* Hàng loạt tính toán ...
  return 2020 - year;
}

function thayDoiNamSinh() {
  //! Hàm thủ tục.
  yearJohn = 2000;
}

thayDoiNamSinh(); //* Lời gọi hàm, Function call

var age = tinhTuoi(yearJohn); //! Biến age đang nhận giá trị trả về từ hàm tinhTuoi
console.log("Tuổi của John = ", age);

//TODO Cách 2:
var tinhtuoi2 = function(year) {
  //* tính toán
  return 2020 - year;
};

var thayDoiNamSinh2 = function(year) {
  yearJohn = 2001;
};

thayDoiNamSinh2(); //* Lời gọi hàm, Function call
var age = tinhtuoi2(yearJohn);
console.log("Tuổi của John2 = ", age);

//TODO Cách 3:
var tinhTuoi3 = year => {
  //* TODO something
  return 2020 - year;
};

var thayDoiNamSinh3 = () => {
  yearJohn = 2002;
};

thayDoiNamSinh3(); //* Lời gọi hàm, Function call
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