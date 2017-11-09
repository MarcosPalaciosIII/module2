const express = require("express");

const app = express();

app.use(express.static("public"));

//SETUP----------------------------------

// cahnge the name of the folder here
//                                |
//                      ----------
//                      |
// app.set("views", "views");
app.set("view engine", "ejs");

//ROUTES----------------------------------

app.get("/", (req,res, next) => {
  const randomNumber = Math.floor(Math.random() * 1000);

  res.locals.theNumber = randomNumber;
  res.locals.myName = "Izzy Ironside";

  res.render("home-page.ejs");
});


const myCars = [
  "Tesla Model3",
  "Honda Civic",
  "batmobile",
  "Mystery Machine",
  "DeLorean",
  "Audi S5",
  "Kia Rio"
];

app.get("/cars", (req, res, next) => {
  res.locals.carList = myCars;
  res.render("car-page.ejs");
});


// END ROUTES ------------------------------
app.use(express.static("public"));

app.listen(3000);
