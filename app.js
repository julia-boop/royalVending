const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routes/mainRouter');
const adminRouter = require('./src/routes/adminRouter');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const locals = require('./src/middlewares/createLocals');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(session({
    secret: 'keyboard cat',
}))
app.use(locals)
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, './assets')));
app.use('/', mainRouter);
app.use('/admin', adminRouter);


app.listen(process.env.PORT || 3004, () => {
    console.log("El servidor esta corriendo...")
})