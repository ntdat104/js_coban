//TODO Hàm setInterval - setInterval(function, ms); - vòng lặp theo ms
//TODO hàm clearInterval

var i = 0;
var intervalId = setInterval(function(){
    ++i;
    console.log(i);
    if (i === 5){
        clearInterval(intervalId);
    }
}, 1000);