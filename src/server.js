const express = require("express");
const server = express();

server.get('/', (request, response) => {
    return response.sendFile("/Sergio/Projetos/rocketseat/maratona/jobs-calc/index.html")
})

server.listen(3000, () => console.log('rodando'))