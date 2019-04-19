var path = require('path');

console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

console.log('path resolve : ' + path.resolve('main.js'));
console.log('Absolute Path : ' + path.isAbsolute('main.js'));

console.log('ext name : ' + path.extname('main.js'));
console.log('path sepration : ' + path.sep);

console.log('path delimiter : ' + path.delimiter);
console.log('path posix : ' + path.posix);

console.log('Win :' + path.win32);