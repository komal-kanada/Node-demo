// ************** Reading from a Stream
// var fs = require('fs');
// var data = '';

// var readerStream = fs.createReadStream('input.txt');


// readerStream.setEncoding('UTF8');

// readerStream.on('data',function(chunk){
//     data += chunk;
// });
// readerStream.on('end',function(){
//     console.log(data);
// });
// readerStream.on('error',function(error){
//     console.log(error.stack)
// });

// console.log("Program Ended");


// ************** Writing to a Stream

// var fs = require('fs');
// var data='komal kanada';

// var writeStream = fs.createWriteStream('output.txt');
// writeStream.write(data,'UTF8');
// writeStream.end();
// writeStream.on('finish',function(){
//     console.log('Write Completed');
// });
// writeStream.on('error', function(err) {
//     console.log(err.stack);
//  });
//  console.log("Program Ended");

//  ************** Piping the Streams

// var fs = require("fs");

// var readerStream = fs.createReadStream('input.txt');

// var writerStream = fs.createWriteStream('output.txt');

// readerStream.pipe(writerStream);

// console.log("Program Ended");

// ************** Chaining the Streams (Zip and unzip File)

var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));

fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
console.log('File is compressed');


