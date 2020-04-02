//TODO Học đọc và ghi file từ thư viện fs.
var fs = require("fs");

var readFile = fs.readFileSync("./song.txt", { encoding:"UTF8" });
console.log(readFile);

fs.writeFileSync("./song-2.txt", "I am a coder");
var readFile2 = fs.readFileSync("./song-2.txt", { encoding:"UTF8" });
console.log(readFile2);