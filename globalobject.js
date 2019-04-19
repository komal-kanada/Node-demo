// console.log( __filename );

// *********** setTimeout(cb, ms)

// function printHello(){
//     console.log("Hello Komal")
// }
// setTimeout(printHello,100);


// *********** clearTimeout(t)

// function printHello(){
//     console.log("Hello Komal")
// }
// var t = setTimeout(printHello,100);
// clearTimeout(t);

// *********** setInterval(cb, ms)

// function printHello() {
//     console.log( "Hello, World!");
//  }
 
//  setInterval(printHello, 2000);



// *********** Global Objects
console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
// 
console.timeEnd('Getting data');

console.info("Program Ended")