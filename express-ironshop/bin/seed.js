// Seed file
//A program to insert new documents into the database on demand

// Fixes several problems:
// 1) You don't have to manually enter products when you delete them.
// 2) You can quickly get a lot of documents by running it multiple times.


// run the Mongoose setup code in our script
require("../config/mongoose-setup");

// import the product model to do product queries
const ProductModel = require("../models/product-model");


const productInfo = [
  {
    name: "Nintendo Switch",
    price: 299.99,
    imageURL: "https://media.giphy.com/media/xUA7bibMNQQqk2U46s/giphy.gif",
    description: "Nintendo Gaming System",
    dateAdded: new Date()
  },
  {
    name: 'Yoga Mat',
    price: 29.99,
    imageUrl: 'http://i.imgur.com/XtpFrW7.jpg',
    description: 'Keeps your knees safe, slip proof, sweat proof. Top of the line',
    dateAdded: new Date()
  },
  {
    name: '20" monitor',
    price: 249.99,
    imageUrl: 'http://i.imgur.com/5ICGeY0.jpg',
    description: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
    dateAdded: new Date()
  },
  {
    name: 'Soylent',
    price: 54.99,
    imageUrl: 'http://media.gq.com/photos/57c6f39209f7003c4afd2c4d/3:2/w_800/drink_gallery5.546e2142f4c6.jpg',
    description: 'You never have to leave your computer! All you can eat nutrition!',
    dateAdded: new Date()
  },
  {
    name: "playstation 4",
    price: 299.99,
    imageURL: "https://media.giphy.com/media/ynNXqi3Pk7upi/giphy.gif",
    description: "playstation Gaming System",
    dateAdded: new Date()
  }
];

// db.produts.insertMany(productInfo)
ProductModel.create(productInfo)
  .then((productResult) => {
    console.log("Inserted ${productResults.length} products");
  })
  .catch((err) => {
    console.log("Product insert ERROR!");
    console.log(err);
  });
