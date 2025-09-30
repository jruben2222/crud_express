const querystring = require('querystring'); //viene en node

const create = (req, res) => {
  res.render("./productos/create");
};

const index =  (req, res) => {

    const query = querystring.stringify(req.query); //convierte el objeto en string
    let url="https://fakestoreapi.com/products";
    if (query) {
        url=`https://fakestoreapi.com/products?${query}`
    }

  fetch(url)
  .then(response => response.json())
  .then(productos =>  res.render('productos', { productos }));
};

const show = (req, res) => {
    const { id } = req.params;
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(producto =>  res.render('productos/show', { producto }));
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
}


module.exports = {
    index,
    show,
    create
}

