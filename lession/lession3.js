console.log("========= Bài 3: Câu lệnh Switch/Case trong Javascript =========");
//TODO Bài 3: Câu lệnh Switch/Case trong Javascript

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