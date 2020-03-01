console.log('========== Bài 7: Một số Methods cơ bản của Array ==========');
//TODO Bài 7: Một số Methods cơ bản của Array

var arrDemo = ['Smith', 'John', 20, true, 'John', 'John', 2020];
var arrDemo2 = ['Đạt', 'Hiếu', 'Phúc'];
console.log('arrDemo = ', arrDemo);

//TODO Nối 2 Array lại với nhau.
console.log('arrDemo.concat(arrDemo2) = ', arrDemo.concat(arrDemo2));

//TODO Thêm 1 giá trị mới vào Array (Thêm vào vị trí sau cùng của Array), sau khi thêm thì trả về length mới của Array đó.
console.log('arrDemo.push(123) = ', arrDemo.push(123)); //* có thể thêm nhiều (123, 456)
console.log('arrDemo = ', arrDemo);

//TODO Thêm 1 giá trị mới vào Array (Thêm vào vị trí đầu tiên của Array), sau khi thêm thì trả về length mới của Array đó.
console.log('arrDemo.unshift(456) = ', arrDemo.unshift(456)); //* có thể thêm nhiều (456, 789)
console.log('arrDemo = ', arrDemo);

//TODO Xóa đi phần tử cuối cùng của Array đó, và trả về giá trị phần tử vừa xóa đó.
console.log('arrDemo.pop() = ', arrDemo.pop());
console.log('arrDemo = ', arrDemo);

//TODO Xóa đi phần tử đầu tiên của Array đó, và trả về giá trị phần tử vừa xóa đó.
console.log('arrDemo.shift() = ', arrDemo.shift());
console.log('arrDemo = ', arrDemo);

//TODO Dùng để tìm kiếm một phần tử nào đó có trong mảng Array không, và trả về chỉ số xuất hiện đầu tiên trong mảng.
console.log('arrDemo.indexOf("John") = ', arrDemo.indexOf('John'));
console.log('arrDemo.indexOf("Linda") = ', arrDemo.indexOf('Linda'));
console.log('arrDemo.lastIndexOf("John") = ', arrDemo.lastIndexOf('John'));
console.log('arrDemo.lastIndexOf("John") = ', arrDemo.lastIndexOf('Linda'));
/*
 * indexOf() => Tìm thấy vị trí xuất hiện đầu tiên của một phần tử => kiểm tra xem một phần tử có tồn tại trong Array hay không?
 * lastIndexOf() cũng tương tự nhưng trả về vị trí xuất hiện cuối cùng của mảng đó
 * + Nếu tồn tại => Trả về index xuất hiện đầu tiên của phần tử đó
 * + Nếu không tồn tại => Trả về -1
 * Nếu indexOf() = lastIndexOf() => Giá trị đó là duy nhất trong mảng.
 */

if (arrDemo.indexOf(true) !== -1) {
  console.log('John đã kết hôn.');
} else {
  console.log('John chưa kết hôn.');
}

//TODO Truy suất vào chỉ số không hợp lệ trong mảng
console.log('arrDemo = ', arrDemo);
arrDemo[8] = 'test';
console.log('arrDemo = ', arrDemo);
arrDemo[arrDemo.length] = 'test2';
console.log('arrDemo = ', arrDemo);