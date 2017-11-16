const express = require("express");
const bcrypt = require("bcrypt");

const UserModel = require("../models/user-model");

const router = express.Router();

// STEP #1 show the sign up form
router.get("/signup", (req, res, next) => {
  res.render("user-views/signup-page");
});

// STEP #2: process the sign up form
router.post("/process-signup", (req, res, next) => {
  if(req.body.signupPassword.length < 16 ||
     req.body.signupPassword.match(/[^a-z0-9]/i) === null             //                |
   ) { //               if no special characters
     res.locals.errorMessage = "Password is invalid";
     res.render("user-views/signup-page");

     // early return to stop the function since there's an error
     // (prevents the rest of the code from running)
     return;
   }
   // query the database to see if the email is taken
   UserModel.findOne({ email: req.body.signupEmail})
   .then((userFromDb) => {
     // userFromDb will be null if the email IS NOT taken

     // display the form again if the email is taken
     if(userFromDb !== null) {
       res.locals.errorMessage = "Email is taken";
       res.render("user-views/signup-page");
     }
     // generate a new salt for this user's password
     const salt = bcrypt.genSaltSync(10);
     // encrypt the password submitted from the form
     const scrambledPassword = bcrypt.hashSync(req.body.signupPassword, salt);

     const theUser = new UserModel({
       fullName: req.body.signupFullName,
       email: req.body.signupEmail,
       encryptedPassword: scrambledPassword

     });

     // return the promise of the next database sign up
     return theUser.save();
   })

  .then(() => {
     req.login(theUser, (err) => {
      if (err) {
        // if it didn't work show the error page
        next(err);
      }
      else {
        //redirect to the home page on successful log in
        res.redirect("/");
      }
    }); //req.login()
  })
  .catch((err) => {
    next(err);
  });
}); // POST / process-signup




//STEP #1 show the log in form
router.get("/login", (req, res, next) => {
  res.render("user-views/login-page");
});

// STEP #2 process the log in form
router.post("/process-login", (req,res, next) => {
  // find a user document in the database with that email
  UserModel.findOne({ email: req.body.LoginEmail })
  .then((userFromDb) => {
    if (userFromDb === null) {
      // if we didn't find a user
      res.locals.errorMessage = "Email incorrect.";
      res.render("user-views/login-page");

      // early return to stop the function since there's an error
      // (prevents the rest of the code from running)
      return;
    }
    // if email is correct now we check the password
    const isPasswordGood =
     bcrypt.compareSync(req.body.LoginPassword, userFromDb.encryptedPassword);

     if (isPasswordGood === false) {
       res.locals.errorMessage = "Password incorrect.";
       res.render("user-views/login-page");

       // early return to stop the function since there's an error
       // (prevents the rest of the code from running)
       return;
     }

     // CREDENTIALS ARE GOOD! We need to log the users in


      // Passport defines the "req.login()"
      // for us to specify when to log in a user into the session
      req.login(userFromDb, (err) => {
        if (err) {
          // if it didn't work show the error page
          next(err);
        }
        else {
          //redirect to the home page on successful log in
          res.redirect("/");
        }
      }); //req.login()
  })// then()
  .catch((err) => {
    next(err);
  });
});


router.get("/logout", (req, res, next) => {
  //Passport defines the "req.logout()" method
  // for us to specify when to log out a user (clear them from the session)
  req.logout();

  res.redirect("/");
});


module.exports = router;
