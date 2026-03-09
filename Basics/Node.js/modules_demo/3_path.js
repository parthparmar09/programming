const path = require('path');//for working with file and directory paths

//global variables for each file
console.log(__dirname);
console.log(__filename);

console.log(path.sep);//platform specific separator for the path \ or /

console.log(path.basename(__filename));//gives the name of the base file
console.log(path.dirname(__filename));//gives the name of the directory
console.log(path.extname(__filename));//gives the file extention
console.log(path.isAbsolute(__filename));//true if the path is absolute
console.log(path.parse(__filename));//parses the path into path object
console.log(path.format(path.parse(__filename)));//path object into absolute path string

console.log(path.join('/usr', 'local', 'bin', 'node'));//join path segments into single path
console.log(path.join('/usr', '//local', 'bin', './node'));//automatically normalizes the .,..,and / s
console.log(path.join('/usr', 'local', 'bin', '../node'));

console.log(path.resolve('/folder1' , 'folder2' , 'file.txt'));//resolves an absolute path
console.log(path.resolve('folder1' , 'folder2' , 'file.txt'));//if the first arg doesn't have \ or / as prefix, then provides the path from the root
console.log(path.resolve('/folder1' , '//folder2' , 'file.txt'));//if any arg have // or \\  then it will be the root dir
console.log(path.resolve('/folder1' , '//folder2' , '../../file.txt'));//automatically normalizes the .,..,and / s