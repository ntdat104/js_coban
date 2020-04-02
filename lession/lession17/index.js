//TODO Promise
//TODO Cài đặt module Promise npm i --save promise-fs

// var fs = require("promise-fs");

// //TODO Cách 1:
// fs.readFile("song1.txt", { encoding: "UTF8" })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// //TODO Cách 2:
// function onSuccess(data) {
//   console.log(data);
// }

// function onError(err) {
//   console.log(err);
// }

// function readFile(path) {
//   return fs.readFile(path, { encoding: "UTF8" });
// }

// readFile("song1.txt")
//   .then(onSuccess)
//   .catch(onError);

// //TODO Readfile thứ nhất rồi readfile thứ 2 rồi mới onSuccess
// readFile("song1.txt")
//   .then(onSuccess)
//   .then(function(){
//       return readFile("song2.txt");
//   })
//   .then(onSuccess)
//   .catch(onError);


//TODO Tự khởi tạo promise
var fs = require("fs");

function readFilePromise(path) { //TODO Tạo hàm trả về promise gọi resolve và reject
  return new Promise(function(resolve, reject) {
    fs.readFile(path, { encoding: "UTF8" }, function(err, data) {
      if (err) { //TODO nếu có lỗi
        reject(err);
      } else { //TODO nếu không có lỗi
        resolve(data);
      }
    });
  });
}

readFilePromise("song1.txt")
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })
