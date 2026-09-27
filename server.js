const http = require("http");

//create server
const server = http.createServer((req,res)=>{
    res.end("Hello, My First Server! ") 
});
server.listen(1000, ()=>{
    console.log("Server is running on 100")
})



//http is a module which is used to create server
//call back banaune
//