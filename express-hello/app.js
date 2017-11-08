// import that "express" package into our application
const express = require("express");
            // npm install express

// create an Express "app" object
const app = express();

// Tell express we have our static files in the  "public/" folder
//   |
//   -----------------------
//                         |
app.use(express.static("public"));
            // "static()" is built-in Express method


// Tell Express we have out HTML files in the "html-files/" folder
//      |
//      ------------
//                  |
app.set("views", "html-files");
app.set("view engine", "ejs");
//                        |
//                         -------------
//                                      |
// Tell Express that we are using the "ejs" package for our seperate HTML files


// app.get("/", function(request, response, next) {
//   response.send("Hello, Express!");
// });


// create a new route in Express
// (a route is one of the pages on our Website)

// anatomy of a route
//                these from from  Express
//                  |         |      |
// app.VERB("URL", (request, response, next) => {
  //     |    |
  //    URL & HTTP verb the browser needs to access this page

// localhost:3000/
//               |
//       --------
//       |
app.get("/", (request, response, next) => {
  // Tell Express that when users visit this page
  // they get the contents of "./html-files/home.ejs"
  response.render(`home.ejs`);
});



// localhost: 3000/about
//                  |
//           -------
//          |
app.get("/about", (request, response, next) => {
  // Tell Express that when users visit this page
  // they get the contents of "./html-files/about.ejs"
  response.render(`about.ejs`);
});

// localhost: 3000/about
//                  |
//           -------
//          |
app.get("/contact", (request, response, next) => {
  // Tell Express that when users visit this page
  // they get the contents of "./html-files/contact.ejs"
  response.render(`contact.ejs`);
});

// without this, the application doesn't stay open
app.listen(3000);
//            |
// localhost: 3000/
