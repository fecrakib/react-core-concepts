const fs  = require("fs");
fs.readFile("hell.txt","utf8",(err,data)=>{
    if(err){
        throw new Error("Error! reading file");
    }
    console.log(data)
})
console.log("I am number :1");

console.log("I am number :2")
