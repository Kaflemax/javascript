//API creation
const http = require("http"); //it is package name
const server = http.createServer((req,res)=>{
     res.setHeader("Content-Type","application/json")
    if(req.method === "GET"){
        console.log("Get Requested");
        res.writeHead(200); //OK
        res.end(JSON.stringify(
        {message: "Get Requested Successfully !"}
        ))
    }
    else if(req.method === "POST"){
        console.log("POST Requested");
        res.writeHead(200);
        res.end(JSON.stringify(
        {message: "POST Requested Successfully !"}
        ))
    }
    else{
        res.writeHead(504); //status code set garxa 404 not found
        res.end(JSON.stringify(
        {message: "Request method not allowed !"}
        ))
    }
})
server.listen(1010, ()=>{
    console.log("Server is running on 1010");
})

//This is how we send request to client