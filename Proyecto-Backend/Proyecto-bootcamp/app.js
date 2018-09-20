var express = require("express");
var bodyParser = require("body-parser");
var port = 3000;
var app = express();

//-------------Configurar Archivos--------------

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//----------------Middleware------------

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//------------------Server--------------

app.listen(port, () => {
    console.log("Servidor corriendo a toda vela...")
})

module.exports = app;