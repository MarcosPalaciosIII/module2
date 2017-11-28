const express = require('express');

const myUploader = require("../config/multer-setup");


const router  = express.Router();


router.get("/settings", (req, res, next) => {
// redirect to log in if there is no logged in user
  if (req.user === undefined) {
    res.redirect("/login");

    return;
  }
  res.render("preferences/settings-page");
});

router.post("/settings",
// "editAvatar" is the input tag's "name" attribute
 myUploader.single("editAvatar"),
  (req, res, next) => {
    console.log('multer has defined "req.file" to access the upload info');
    console.log(req.file);

    if (req.user === undefined) {
      res.redirect("/login");

      return;
    }
    req.user.set({ fullName: req.body.editFullName });
      if (req.file) {
        req.user.set ({ avatar: `/uploads/${req.file.filename}` });
      }
    req.user.save()
    .then(() => {
      res.redirect("/settings");
    })
    .catch((err) => {
      next(err);
    });

  }
);

module.exports = router;
