//API creation
const http = require("http"); //it is package name
 
const server = http.createServer((req,res)=>{
    res.end("My request is "+req.method); //GET aauxa
})
server.listen(1010, ()=>{
    console.log("Server is running on 1010");
})

//This is how we send request to client