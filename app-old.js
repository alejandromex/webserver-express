const http = require('http');

//Creamos el servidor

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida ={
        nombre: 'Alex',
        edad: 23,
        url: req.url
    };

    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log("Esto es un mensaje desde el puerto 8080");