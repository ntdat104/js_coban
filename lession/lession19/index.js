//TODO node CO
//TODO Cài đặt npm install co --save

var co = require("co");
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

co(function*(){ //TODO generator function
//    var song1 = yield readFilePromise("song1.txt");
//    var song2 = yield readFilePromise("song2.txt");
//    var song3 = yield readFilePromise("song3.txt");
    var data = yield [
        readFilePromise("song1.txt"),
        readFilePromise("song2.txt"),
        readFilePromise("song3.txt")
    ]
   return data;
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});
