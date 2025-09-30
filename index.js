require('dotenv').config();
const express = require('express');
const app = express();

const layouts = require('express-ejs-layouts');


const port = process.env.APP_PORT || 3001;


const path= require('path');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public"))); //middleware para archivos estaticos (css, js, imagenes)

app.set('view engine', 'ejs'); //motor de plantillas
app.set('views', path.join(__dirname, 'src/views')); //donde estan las vistas

app.use(layouts);
app.set('layout', 'layouts/layout'); //donde esta el layout principal

const mainRouter = require('./src/routes/main.router');
app.use('/', mainRouter); //valido tambien app.use(mainRouter); 
const productosRouter = require('./src/routes/productos.router');
app.use('/productos', productosRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});