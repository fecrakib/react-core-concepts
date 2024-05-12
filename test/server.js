const http = require("node:http");
const server = http.createServer(((req,res)=>{
    // res.end("Hello from server world !")
    
    if(req.url==='/home' && req.method==='GET'){
        res.end("this is home data");
    }else if(req.url ==='/posts' && req.method==="GET"){
        res.end("This is posts data");
    }else{
        res.end("Not found")
    }

    

}));
server.listen(5000,"127.0.0.1",()=>{
    console.log("sever is listening")
});