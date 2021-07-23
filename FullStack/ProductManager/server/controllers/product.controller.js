const Product = require('../models/product.model');

module.exports.allProducts = (req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err));
};

module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err));
};

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then( product => res.json(product))
    .catch(err => res.json(err));
};