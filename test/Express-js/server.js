const express = require('express');

const app  = express();
const port= 3002;
const mongoose = require('mongoose');
const connectDb = async () => {
 try{
    await mongoose.connect('mongodb://127.0.0.1:27017/testProductDB')
    console.log("database is connected")

 }catch (ere){
 console.log(ere)
 }
};


app.listen(port,async()=>{
    console.log(`server is running at http://locathost:${port} `)
     await connectDb();
})

app.get('/',(req,res)=>{
    res.send(("This is home pageS"))
})
