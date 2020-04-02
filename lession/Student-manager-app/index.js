/*
 * 1. Show all students
 * 2. Create a new students
 * 3. Save & Exit
*/

var readlineSync = require("readline-sync");
var fs = require("fs");

var students = [];

function loadData(){
    var fileContent = fs.readFileSync("./data.json");
    students = JSON.parse(fileContent);
}

function showStudents(){
    for (var student of students){
        console.log(student.name, student.age);
    }
}

function showCreatStudent(){
    var name = readlineSync.question("Name: ");
    var age = readlineSync.question("Age: ");
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function showMenu(){
    console.log("1. Show all students");
    console.log("2. Create a new students");
    console.log("3. Save & Exit");

    var option = readlineSync.question("> ");
    switch (option){
        case "1":
            showStudents();
            showMenu();
        case "2":
            showCreatStudent();
            showMenu();
        case "3":
            saveAndExit();
            break
        default:
            console.log("Wrong option");
            showMenu();
    }
}

function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync("./data.json", content, { encoding:"UTF8" });
}

function main(){
    loadData();
    showMenu();
}

main();
