// require , exports, module, __dirname, __filename

console.log(__dirname);
// output /prev/Documents/Vignans-personal/secure-mean-stack-dev/Secure-MEAN-Stack-Developer/modules

console.log(__filename);
// /prev/Documents/Vignans-personal/secure-mean-stack-dev/Secure-MEAN-Stack-Developer/modules/model.js

console.log(module);
/*
{
  id: '.',
  path: '/prev/Documents/Vignans-personal/secure-mean-stack-dev/Secure-MEAN-Stack-Developer/modules',
  exports: {},
  filename: '/prev/Documents/Vignans-personal/secure-mean-stack-dev/Secure-MEAN-Stack-Developer/modules/model.js',
  loaded: false,
  children: [],
  paths: [
    '//prev/Documents/Vignans-personal/secure-mean-stack-dev/Secure-MEAN-Stack-Developer/modules/node_modules',
    '//prev/Documents/Vignans-personal/secure-mean-stack-dev/Secure-MEAN-Stack-Developer/node_modules',
    '//prev/Documents/Vignans-personal/secure-mean-stack-dev/node_modules',
    '//prev/Documents/Vignans-personal/node_modules',
    '//prev/Documents/node_modules',
    '//prev/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
*/

let name = ['vignan', 'lokesh', 'rajesh', 'susu'];
let score = [100,101,99,102];

// module.exports = name;
// module.exports = score;

console.log(module.exports);
// [ 100, 101, 99, 102 ] 
//NOTE - caution here : since we are reasigning the exports, overriding it. so in case if we want to export two objects we should do it two contents of exports

module.exports.name = name;
//here module.exports and exports refer the same thing
exports.score = score;
console.log(module.exports);

/*{
    name: [ 'vignan', 'lokesh', 'rajesh', 'susu' ],
    score: [ 100, 101, 99, 102 ]
  }
  */