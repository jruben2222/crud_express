require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3001;
const bodyParser = require('body-parser');

const mainRouter = require('./src/routes/main.router');
app.use('/', mainRouter); //valido tambien app.use(mainRouter); 
const productosRouter = require('./src/routes/productos.router');
app.use('/api/productos', productosRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});