const express = require('express');
const router  = express.Router();


router.get('/dinosaurs', (req, res, next) => {
  res.render('dino-page.ejs');
});

router.get('/pizza', (req, res, next) => {
  res.render('pizza-page.ejs');
});

module.exports = router;
