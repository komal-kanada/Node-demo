// *********** Synchronous vs Asynchronous

var fs = require("fs");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");


// Every method in the fs module has synchronous as well as asynchronous 
// forms.Asynchronous methods take the last parameter as the completion function callback and the 
// first parameter of the callback function as error.It is better to use an asynchronous method instead of a synchronous method,
//  as the former never blocks a program during its execution, whereas the second one does.