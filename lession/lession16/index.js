//TODO Callback Hell
var fs = require("fs");

fs.readFile("song1.txt", { encoding:"UTF8" }, function(err, data){
    console.log(data);
    fs.readFile("song2.txt", { encoding:"UTF8" }, function(err, data2){
        console.log(data2);
        fs.readFile("song3.txt", { encoding:"UTF8" }, function(err, data3){
            console.log(data3);
        });
    });
});

//TODO Dùng Promise để fix Callback Hell