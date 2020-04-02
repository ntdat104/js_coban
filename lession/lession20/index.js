//TODO async await

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

async function run(){
    var song1 = await readFilePromise("song1.txt");
    var song2 = await readFilePromise("song2.txt");
    return [song1, song2];
};

run().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});