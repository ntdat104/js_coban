//TODO Sync vs Async (Synchoronous vs Asynchronous) - Đồng bộ và bất đồng bộ
var fs = require("fs");

// console.log("START");

// var song1 = fs.readFileSync("song1.txt", { encoding:"UTF8" });
// console.log(song1);

// var song2 = fs.readFileSync("song2.txt", { encoding:"UTF8" });
// console.log(song2);

// console.log("END");

console.log("START");
fs.readFile("song1.txt", { encoding:"UTF8" }, function(err, data){
    console.log(data);
})
console.log("END");

//TODO Read/Write to FS
//TODO Network
