const express = require("express");

const ProductModel = require("../models/product-model");

const router = express.Router();

router.get("/products", (req, res, next) => {
  ProductModel
    .find()
    .limit(25)
    .sort({ dateAdded: -1})
    .exec()
    .then((productResults) => {
      // create a local variable for the view to access the DB results
      res.locals.listOfProducts = productResults;

      // render only after the results have been retrieved
      // (the "then()" callback)
      res.render("product-views/product-list");
    })
    .catch((err) => {
      // render the error page with our error
      next(err);
    });
}); // GET / products


// STEP #1 show the new product form
router.get("/products/new", (req, res, next) => {
  res.render("product-views/product-form");
}); // GET / products

// STEP #2: process the new product submission
router.post("/products", (req, res, next) => {
  const theProduct = new ProductModel({
    name: req.body.productName,
    price: req.body.productPrice,
    imageUrl: req.body.productImage,
    description: req.body.ProductDescription,
    dateAdded: new Date()    // |
  }); // |                   // |
      // fields from        names of the
      // model's schema     input tags

  theProduct.save()
  .then(() => {
    // STEP #3 redirect after a SUCCESSFUL save
    // redirect to the list of products page
    res.redirect("/products");
    // you can't redirect to an EJS file
    // you can ONLY redirect to a URL
  })
  .catch((err) => {
    // render the error page with our error
    next(err);
  });
}); // POST / products

module.exports = router;