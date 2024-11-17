// console.log("Hola compañeros");

const http= require("http");
const fs = require ("fs");
const server = http.createServer((req,res) =>{
    const read = fs.createReadStream("./static/index.html")
    read.pipe (res)
    console.log("Servidor dandole")
});
server.listen(3000)
console.log(`Server en el puerto ${3000}`);