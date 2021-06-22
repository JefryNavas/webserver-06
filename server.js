const express = require('express');
const app = express();
const hbs = require("hbs");
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'));

// Establecer el motor para las vistas
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    res.render('home', {
        titulo: 'Home',
        nombre: 'juAn PereZ',
    });
});
app.get('/about', function(req, res) {

    res.render('about', {
        titulo: 'About',
    });
});

app.listen(3000, () => {
    console.log("Servidor Iniciado, escuchando el puerto 3000");
});