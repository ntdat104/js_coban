console.log('========== Bài 6: Array trong Javascript ==========');
//TODO Bài 6: Array trong Javascript

//* Để khai báo 1 Array có 2 cách

//TODO Cách 1
var arrStudent = ['Nguyễn Văn A', 'Nguyễn Văn B', 'Nguyễn Văn C'];
console.log('arrStudent = ', arrStudent);
console.log('arrStudent length = ', arrStudent.length);
console.log('arrStudent[0] = ', arrStudent[0]);
console.log('arrStudent[length - 1] = ', arrStudent[arrStudent.length - 1]);

//TODO Cách 2
var arrStudent2 = new Array('Nguyễn Văn A', 'Nguyễn Văn B', 'Nguyễn Văn C');
console.log('arrStudent2 = ', arrStudent2);
console.log('arrStudent2[2] = ', arrStudent2[2]);

//* Bản chất của Array trong Javascript là một Object
console.log(typeof arrStudent);

//TODO Truy xuất vào từng giá trị trong Array
var arrDemo = ['Nguyễn Văn A', 20, true, [123, 456, 789]];
console.log('arrDemo = ', arrDemo);
console.log('arrDemo[2] = ', arrDemo[2]);
console.log('arrDemo[3] = ', arrDemo[3]);
console.log('arrDemo[3][2] = ', arrDemo[3][2]);