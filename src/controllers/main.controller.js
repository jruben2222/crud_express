//const path = require('path');


const index=(req, res) => {
//  console.log(__dirname); //muestra la ruta absoluta del directorio actual
//res.sendFile(path.resolve(__dirname,'../../private/index.html'));
res.render('index', { title: 'Home' });
}

module.exports = {
  index
}