// ************** Writing to Buffers

// buf =new Buffer(256);
// len= buf.write('komal kanada');
// console.log("write"+len);

// ************** Reading from Buffers

// buf = new Buffer(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }
// console.log( buf.toString('ascii'));
// console.log( buf.toString('ascii',0,5));
// console.log( buf.toString('utf8',0,5));
// console.log( buf.toString(undefined,0,5));

// ************** Buffers to JSON

// var buf = new Buffer('Simply Easy Learning');
// var json = buf.toJSON(buf);
// console.log(json);

// ************** Concatenate Buffers

// var buffer1= new Buffer('komal');
// var buffer2= new Buffer('kanada');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log('content: =====>',buffer3.toString());

// ************** Compare Buffers

// var buffer1 =new Buffer('kanada');
// var buffer2=new Buffer('kanada1');
// var result = buffer1.compare(buffer2);

// if(result < 0) {
//     console.log(buffer1 +" comes before " + buffer2);
//  } else if(result === 0) {
//     console.log(buffer1 +" is same as " + buffer2);
//  } else {
//     console.log(buffer1 +" comes after " + buffer2);
//  }

// ************** Copy Buffer


// var buffer1 = new Buffer('komal kanada');
// var buffer2= new Buffer(5);
// buffer1.copy(buffer2);
// console.log('Buffer2 content:'+buffer2.toString())


// ************** Slice Buffer
// var buffer1 =new Buffer('kanadakomal');
// var buffer2=buffer1.slice(0,6);
// console.log("buffer2 content:"+buffer2.toString())

// ************** Buffer Length

// var buffer1= new Buffer('BacancyTechnology');
// console.log('content',buffer1.length);

