const e = require("express");

const index=(req, res) => {
  res.json('Hello World!');
}

module.exports = {
  index
}