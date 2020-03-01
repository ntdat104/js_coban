console.log('========== Bài 8: Object trong Javascript ==========');
//TODO Bài 8: Object trong Javascript

//TODO Cách 1:

var student = {
  fullname: 'Nguyễn Văn A',
  year: 2000,
  scores: {
    maths: 9,
    physics: 7.5,
    chemistry: 5
  },
  calAverage: function() {
    console.log('Run calAverage');

    var maths = this.scores.maths;
    var physics = this.scores.physics;
    var chemistry = this.scores.chemistry;

    return (maths + physics + chemistry) / 3;
  }
};

console.log('student = ', student);
console.log('fullName = ', student.fullname);
console.log('scores = ', student.scores);
console.log('scores.maths = ', student.scores.maths);
console.log('scores.physics = ', student.scores.physics);
console.log('scores.chemistry = ', student.scores.chemistry);

var average = student.calAverage(); //! Method của object student
console.log('average = ', average);

//* This -> Con trỏ this -> Trỏ tới đối tượng hiện tại.

//TODO Cách 2:

var student2 = new Object();
console.log('student2 = ', student2);

//! Thêm vào
student2.fullname = 'Nguyễn Văn B';
student2.year = 2001;
student2.scores = {
  maths: 8,
  physics: 7,
  chemistry: 5
};
student2.calAverage = function() {
  console.log('Run calAverage');

  var maths = this.scores.maths;
  var physics = this.scores.physics;
  var chemistry = this.scores.chemistry;

  return (maths + physics + chemistry) / 3;
};
//? Cách khác: student2.calAverage = student.calAverage;
//* End

console.log('student2 = ', student2);
console.log('student2.calAverage() = ', student2.calAverage());
console.log('student2["fullname"] = ', student2['fullname']);

//TODO Giải bài tập

function calBMI() {
  return this.mass / (this.height * this.height);
}

var john = {
  fullName: 'John',
  mass: 59,
  height: 1.65,
  BMI: calBMI
};

var mark = {
  fullName: 'Mark',
  mass: 69,
  height: 1.7,
  BMI: calBMI
};

console.log('BMI John = ', john.BMI());
console.log('BMI Mark = ', mark.BMI());

if (john.BMI() > mark.BMI()) {
  console.log('BMI của John lớn hơn BMI của Mark.');
} else if (john.BMI() < mark.BMI()) {
  console.log('BMI của Mark lớn hơn BMI của John.');
} else {
  console.log('BMI của John và Mark bằng nhau.');
}

//TODO Dùng function như tham số (Callback)
function funcBark(onFinish) {
  console.log('Barking...');
  onFinish();
}
function soundOfBarking() {
  console.log('Gâu Gâu Gâu.');
}
var myDog = {
  bark: funcBark
};

myDog.bark(soundOfBarking);