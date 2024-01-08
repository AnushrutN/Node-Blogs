// Global Object
// basically something that's just there out the box, all the functions below could have the 
// "global." prefix but since it's just out there already you don't need it. 

// setTimeout(() => {
//    console.log('in the timeout');
//    clearInterval(int); 
// }, 3000);

// const int = setInterval(() => {
//     console.log('in the interval');
// }, 1000);

// console.log(__dirname);
// console.log(__filename);
// `````````````````````````````````````````````````````````````````````````//

// Modules
// this is basically the import of JS. "const {...} = require(..)"  
// const {people, ages} = require('./people'); 
// console.log(people, ages);
// const os = require('os');

// console.log(os.platform(), os.homedir());
 
// `````````````````````````````````````````````````````````````````````````//

// File System
//const fs = require('fs'); // importing the "filesystem" module.

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("last line");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// writing files
// fs.writeFile('./docs/blog1.txt', 'Hello, worlds!!', () => {
//     console.log('file was written!');
// });

// fs.writeFile('./docs/blog2.txt', 'helloo', () => {
//     console.log('file was written!');
// });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// directories
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log("Dir created.");
//     });
// } else {
//     fs.rmdir("./assets", (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//Deleting files
// if (fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) =>{
//         if (err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// }

// `````````````````````````````````````````````````````````````````````````//
//Streams
// const fs = require("fs");

// const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
// const writeStream = fs.createWriteStream('./docs/blog4.txt');


// readStream.on('data', (chunk) => {
//     console.log("```````````new chunk```````````");
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping

// readStream.pipe(writeStream);