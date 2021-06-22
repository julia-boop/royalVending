const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, './assets')));

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(3000, () => {
    console.log("El servidor esta corriendo...")
})