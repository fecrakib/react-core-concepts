const express = require('express');
const path  = require('path');
const app = express();
const port  = 3000;
app.get('/',(req,res)=>{
    // res.send("Hello world"),
    res.json({name:"Rakib"});
})
app.get('/home',(req,res)=>{
    const filePath = path.join(__dirname,'index.html');
    res.sendFile(filePath,(err)=>{
        console.error("Error sending file:,err");
        res.status(5000).send("Internal server error")
    })
  
})

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

