const http = require('http');
const webPort = 3000

http.createServer( (req, res) => {
    res.write('Hola Mundo');
    res.end();
})
.listen( webPort )

console.log(`Escuchando el puerto 2, ${webPort}`)