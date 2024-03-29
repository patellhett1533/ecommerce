const Product = require('../model/Product');
const shortid = require('shortid');
const slugify = require('slugify');

exports.createProduct = (req, res) => {
    // res.status(200).json({file: req.files, body:req.body});

    const { name, price, discription, quantity,  createdBy } = req.body;
    let productPicture = [];

    if(req.files.length > 0){
        productPicture = req.files.map(file => {
            return { img: file.filename }
        })
    }

    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        discription,
        quantity,
        productPicture,
        createdBy: req.user._id
    });

    product.save((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
            return res.status(201).json({ product });
        }
    });
};