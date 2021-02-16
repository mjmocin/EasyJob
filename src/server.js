const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.urlencoded({ extended: true })) // urlencoded é um parser das informações vindas no corpo da requisição
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk") // setting the view engine for .njk files

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, () => {
    console.log("server is running")
})