const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routes/mainRouter');
const adminRouter = require('./src/routes/adminRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, './assets')));

app.use('/', mainRouter);

app.use('/admin', adminRouter);


app.listen(process.env.PORT || 3004, () => {
    console.log("El servidor esta corriendo...")
})