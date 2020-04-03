//TODO hàm setTimeout - setTimeout(function, ms) - milliseconds
//TODO hàm clearTimeout

function done(){
    console.log("Finish");
}

console.log("Start");
var timeoutId = setTimeout(done, 1000);
console.log("Done");
clearTimeout(timeoutId);
