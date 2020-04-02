//TODO Promise.all
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

//TODO Cách 1: Sử dụng return promise

// readFilePromise("song1.txt")
//     .then(function(data){ //TODO sau then trả về 1 cái Promise
//         console.log(data);
//         return readFilePromise("song2.txt");
//     })
//     .then(function(data){
//         console.log(data);
//         return readFilePromise("song3.txt");
//     })
//     .then(function(data){
//         console.log(data);
//     });

//TODO Cách 2: Sử dụng promise.all
Promise.all([
    readFilePromise("song1.txt"), //* resolved
    readFilePromise("song2.txt"), //* resolved
    readFilePromise("song3.txt") //* resolved
]).then(function(data){ //TODO then được gọi khi cả 3 file được resolved
    console.log(data);
}).catch(function(err){
    console.log(err);
})