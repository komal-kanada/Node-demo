var path = require('path');

console.log('Path NOrmalize : ' + path.normalize('/test/test1//2slash/1slash/tab/..'));
console.log('Path Join : ' + path.join('/test','test1','2slash/1slash','tab','..'));

console.log('Path Resolve : ' + path.resolve('Path.js'));
console.log('Path Absolute : ' + path.isAbsolute('/Users/macmini/Desktop/NodeDemo/Path.js'));

console.log('Path Relative : ' + path.relative('/Users/macmini/Desktop/NodeDemo/Path.js','/Users/macmini/Desktop/NodeDemo/Utillity Module/Path.js'));
console.log('Path Directory : ' + path.dirname('/Users/macmini/Desktop/NodeDemo/Path.js'))

console.log('Path Basename : ' + path.basename('/Users/macmini/Desktop/NodeDemo/Path.js'));
console.log('Extension of path : ' + path.extname('/Users/macmini/Desktop/NodeDemo/Path.js'));

// console.log('Path Parse : ' + path.parse('/Users/macmini/Desktop/NodeDemo/Path.js'));




