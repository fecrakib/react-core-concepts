const fs  = require("fs");
const readableSteam = fs.createReadStream(
     'hell.txt', "utf-8"
);

readableSteam.on("data",(data)=>{
    console.log(data)

    const writeableStream = fs.createWriteStream
})