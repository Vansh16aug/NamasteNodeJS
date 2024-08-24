/*
* Last line of the file
* a= 100
* Timer expired
* nextTick
* File Reading CB
* setImmediate
* 2nd setImmediate
* 2nd setTimeout
*/
const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => {
    console.log("Timer expired");
    setImmediate(() => console.log("2nd setImmediate"));
    setTimeout(() => console.log("2nd setTimeout"));
    process.nextTick(()=> console.log("nextTick")); 
}, 0);

function printA() {
  console.log("a = ", a);
}

printA();
console.log("Last line of the file.");

