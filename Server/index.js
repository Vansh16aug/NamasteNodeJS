const http = require("http");
http.createServer((req,res)=>{
    if(req.url ==='/abc'){
        res.end("hiii");
    }
    res.end("hello world");
}).listen(3000);