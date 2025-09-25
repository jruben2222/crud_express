const querystring = require('querystring'); //viene en node

const index = ('/', (req, res) => {

    const query = querystring.stringify(req.query); //convierte el objeto en string
    let url="https://fakestoreapi.com/products";
    if (query) {
        url=`https://fakestoreapi.com/products?${query}`
    }

  fetch(url)
  .then(response => response.json())
  .then(productos =>  res.render('productos', { productos }));
});

const show = ('/:id', (req, res) => {
    const { id } = req.params;
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(producto => res.json(producto));
});

module.exports = {
    index,
    show
}

