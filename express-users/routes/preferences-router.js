const express = require('express');
const router  = express.Router();


router.get("/settings", (req, res, next) => {
// redirect to log in if there is no logged in user
  if (req.user === undefined) {
    res.redirect("/login");

    return;
  }
  res.render("preferences/settings-page");
});

module.exports = router;
