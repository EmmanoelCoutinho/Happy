const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express();

server

//utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views',path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//rotas da aplicação
.get('/', pages.index)
.get('/create-orphanage', pages.createOphanage)
.get('/orphanages', pages.orphanages)
.get('/orphanage', pages.orphanage)



//ligar o servidor
server.listen(5500)
console.log('server ligado!')
