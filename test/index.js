
const { log } = require("node:console");
const EventEmitter  = require("node:events");
class MyBirthday extends EventEmitter {}
const myBirthday1 = new MyBirthday();
myBirthday1.on('birthday',()=>{
    console.log('Happy Birthday')
})
myBirthday1.on('birthday',(b)=>{
    console.log(`I will send ${b} girft`);
})
myBirthday1.emit('birthday',"Bike");