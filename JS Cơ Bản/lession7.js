console.log("========== Bài 7: Một số Methods cơ bản của Array ==========");
//TODO Bài 7: Một số Methods cơ bản của Array

var arrDemo = ["Smith", "John", 20, true, "John", "John", 2020];
var arrDemo2 = ["Đạt", "Hiếu", "Phúc"];
console.log("arrDemo = ", arrDemo);

//TODO Array.push dùng để thêm 1 giá trị mới vào Array (Thêm vào vị trí sau cùng của Array), sau khi thêm thì trả về length mới của Array đó.
console.log("arrDemo.push(123) = ", arrDemo.push(123)); //* có thể thêm nhiều (123, 456)
console.log("arrDemo = ", arrDemo);

//TODO Array.unshift thêm 1 giá trị mới vào Array (Thêm vào vị trí đầu tiên của Array), sau khi thêm thì trả về length mới của Array đó.
console.log("arrDemo.unshift(456) = ", arrDemo.unshift(456)); //* có thể thêm nhiều (456, 789)
console.log("arrDemo = ", arrDemo);

//TODO Array.pop dùng để xóa đi phần tử cuối cùng của Array đó, và trả về giá trị phần tử vừa xóa đó.
console.log("arrDemo.pop() = ", arrDemo.pop());
console.log("arrDemo = ", arrDemo);

//TODO Array.shift xóa đi phần tử đầu tiên của Array đó, và trả về giá trị phần tử vừa xóa đó.
console.log("arrDemo.shift() = ", arrDemo.shift());
console.log("arrDemo = ", arrDemo);

//TODO Array.indexOf dùng để tìm kiếm một phần tử nào đó có trong mảng Array không, và trả về chỉ số xuất hiện đầu tiên trong mảng.
console.log("arrDemo.indexOf('John') = ", arrDemo.indexOf("John"));
console.log("arrDemo.indexOf('Linda') = ", arrDemo.indexOf("Linda"));
console.log("arrDemo.lastIndexOf('John') = ", arrDemo.lastIndexOf("John"));
console.log("arrDemo.lastIndexOf('John') = ", arrDemo.lastIndexOf("Linda"));
/*
 * indexOf() => Tìm thấy vị trí xuất hiện đầu tiên của một phần tử => kiểm tra xem một phần tử có tồn tại trong Array hay không?
 * lastIndexOf() cũng tương tự nhưng trả về vị trí xuất hiện cuối cùng của mảng đó
 * + Nếu tồn tại => Trả về index xuất hiện đầu tiên của phần tử đó
 * + Nếu không tồn tại => Trả về -1
 * Nếu indexOf() = lastIndexOf() => Giá trị đó là duy nhất trong mảng.
 */

if (arrDemo.indexOf(true) !== -1) {
  console.log("John đã kết hôn.");
} else {
  console.log("John chưa kết hôn.");
}

//TODO Truy suất vào chỉ số không hợp lệ trong mảng
console.log("arrDemo = ", arrDemo);
arrDemo[8] = "test";
console.log("arrDemo = ", arrDemo);
arrDemo[arrDemo.length] = "test2";
console.log("arrDemo = ", arrDemo);

//TODO Array.concat dùng để nối 2 Array lại với nhau.
//* VD1
console.log("arrDemo.concat(arrDemo2) = ", arrDemo.concat(arrDemo2));

//TODO Array.map biến đổi các phần tử trong mảng thành các phần tử mới theo 1 quy tắc nào đó. (1 đầu vào)
var numbers = [1, 2, 3, 4];
var squaredNumbers = numbers.map(function(x) {
  return x * x;
});
console.log("squaredNumbers = ", squaredNumbers);

//* VD2
var rectangles = [
  { width: 10, height: 5 },
  { width: 10, height: 20 },
  { width: 4, height: 6 }
];
var result = rectangles.map(function(x) {
  return x.width * x.height;
});
console.log("result = ", result);

//TODO Array.filter dùng để lọc các phần tử theo 1 quy tắc nào đó. (1 đầu vào)
var numbers = [1, 2, 3, 4];
var result = numbers.filter(function(x) {
  return x % 2 === 0;
});
console.log("result = ", result);

//TODO Array.find dùng để tìm phần tử theo một quy tắc nào đó, nếu tìm được thì trả về 1 phần tử rồi dừng lại. (1 đầu vào)
var numbers = [1, 2, 3, 4];
var result = numbers.find(function(x) {
  return x % 2 === 0;
});
console.log("result = ", result);

//TODO Array.reduce(basic) dùng để giảm các phần tử (2 đầu vào)
//* VD1
var numbers = [1, 2, 3, 4];
var result = numbers.reduce(function(x, y) {
  console.log("x = " + x, "y = " + y);
  return x + y;
}); //! không có init
console.log("result = ", result);

//* VD2
var orders = [
  { name: "A", quatity: 2, unitPrice: 100 },
  { name: "B", quatity: 1, unitPrice: 400 },
  { name: "C", quatity: 5, unitPrice: 15 }
];
//? Dùng reduce để tính tổng của đơn hàng
var price = orders.map(function(x) {
  return x.quatity * x.unitPrice;
});
var result = price.reduce(function(x, y) {
  return x + y;
});
console.log("result = ", result);

//TODO Array.reduce(advance)
//* VD1
var numbers = [1, 2, 3, 4];
var result = numbers.reduce(function(x, y) {
  console.log("x = " + x, "y = " + y);
  return x + y;
}, 0); //! chú ý thêm tham số thứ 2 là init = 0.
console.log("result = ", result);

//* VD2
var products = [
  { name: "A", quantity: 2, unitPrice: 10 },
  { name: "B", quantity: 3, unitPrice: 20 },
  { name: "C", quantity: 4, unitPrice: 30 }
];
//* total = ?
var total = products.reduce(function(x, y) {
  return x + y.quantity * y.unitPrice;
}, 0);
/*
 * loop 1: x = 0, y = products[0]
 * 0 + 2 * 10 = 20
 * loop 2: x = 20, y = products[1]
 * 20 + 3 * 20 = 80
 * loop 3: x = 80, y = products[2]
 * 80 + 4 * 30 = 200
 */
console.log("total = ", total);

//TODO reduce bài tập
var items = ["Tom", "Bill", "Kim"];
var result = items.reduce(function(x, y) {
  return x + "<" + y + ">";
}, "");
console.log(result);

//TODO Array.sort dùng để xắp xếp các phần tử trong mảng. (2 đầu vào a,b)
/*
 * syntax: array.sort(function(a, b){ })
 * Nếu function trả về một giá trị < 0 thì a ở trước b
 * Nếu function trả về một giá trị > 0 thì a ở sau b
 * Nếu function trả về một giá trị = 0 thì a và b giữ nguyên
 */

var numbers = [2, 9, 3, 4, 1, 5, 6, 7, 8, 10];
//* [1, 2, 3, 4, 9] // tăng dần
var tangdan = numbers.sort(function(a, b) {
  //* giả sử a = 1, b = 4
  return a - b; //* < 0
});
console.log("tangdan = ", tangdan);

//* [9, 4, 3, 2, 1] // giảm dần
var giamdan = numbers.sort(function(a, b) {
  //* giả sử a = 9, b = 4
  return b - a; //* > 0
});
console.log("giamdan = ", giamdan);

//* VD
var employees = [
  { name: "Tí", age: 18 },
  { name: "Tèo", age: 20 },
  { name: "Maria", age: 19 }
];
//* 18<19<20
var result = employees.sort(function(a, b) {
  //* a = employees[1], b = employees[2]
  //* giả sử a = 18, b = 19
  //* a < b
  return a.age - b.age; //* < 0
});
console.log("result = ", result);
