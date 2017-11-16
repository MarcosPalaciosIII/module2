const passport = require("passport");

const UserModel = require("../models/user-model");


// serialize (what user info do we save to the session)
//---------------------------------------------
// gets called when a user logs in (on our POST /process-login)
passport.serializeUser((userFromDb, cb) => {
  // null is for saying "no errors occurred durring the serialize process"
  cb(null, userFromDb._id);
  // saves only the "_id" of the user
});

// deserialize (how do we retrieve the user details from the session)
//----------------------------------------------
// gets called EVERY TIME you visit a page on the site while you are logged in
// (that's so we can potentially personalize all pages)
passport.deserializeUser((idFromSession, cb) => {
  // find the user's document by the ID we saved in the session
  UserModel.findById(idFromSession)
  .then((userFromDb) => {
    // null is saying "no errors occurred" durring the deserialize process
    cb(null, userFromDb);
    // send Passport the logged in user's info
  })
  .catch((err) => {
    cb(err);
  });
});


// STRATEGIES (npm package that enables other methods of logging)
