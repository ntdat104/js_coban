console.log('========== Bài 2: Câu lệnh If/Else trong Javascript ==========');
//TODO Bài 2: Câu lệnh If/Else trong Javascript

var firstname = 'John';
var age = 18;

console.log('age = ', age);
console.log('age >= 20', age >= 20);
console.log('age < 30', age < 30);
console.log('!(age < 30)', !(age < 30));

console.log('age >= 20 && age < 30', age >= 20 && age < 30);
console.log('age >= 20 || age < 30', age >= 20 || age < 30);

if (age < 13) {
  console.log(firstname + ' là một cậu học sinh');
} else if (age >= 13 && age <= 18) {
  console.log(firstname + ' là một cậu bé tuổi teen');
} else if (age > 18 && age < 30) {
  console.log(firstname + ' là một người đàn ông trung niên');
} else {
  console.log(firstname + ' là một người đàn ông trưởng thành');
}