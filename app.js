const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, './assets')));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/equipos/:id', (req, res) => {
    res.render('equipos')
})

app.get('/equipos/detail/:id', (req, res) => {
    res.render('detail')
})

app.get('/quienesSomos', (req, res) => {
    res.render('about')
})


app.listen(process.env.PORT || 3004, () => {
    console.log("El servidor esta corriendo...")
})