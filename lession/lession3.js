console.log("========= Bài 3: Câu lệnh Switch/Case trong Javascript =========");
//TODO Bài 3: Câu lệnh Switch/Case trong Javascript

//TODO Trường hợp 1
var fruit = "Banana";

switch (fruit) {
  case "Banana":
    console.log("It is", fruit);
    break;
  case "Orange":
    console.log("It is", fruit);
    break;
  case "Apple":
    console.log("It is", fruit);
    break;
  default:
    console.log("I have never heard of", fruit);
    break;
}

//TODO Trường hợp 2
var age = 45;

switch (true) {
  case age < 13:
    console.log("I am", age);
    break;
  case 13 <= age && age <= 18:
    console.log("I am", age);
    break;
  case 18 < age && age < 30:
    console.log("I am", age);
    break;
  default:
    console.log("Now, I am", age);
    break;
}