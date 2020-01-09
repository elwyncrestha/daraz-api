const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

// Get All
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// Save Product
router.post("/", async (req, res) => {
  const product = new Product({
    productId: req.body.productId,
    name: req.body.name,
    price: req.body.price
  });

  try {
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
