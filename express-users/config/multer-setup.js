const multer = require("multer");

// make sure to add "public/uploads" to ".gitignore"
const myUploader =
  multer({
    dest: __dirname + '/../public/uploads/'
  });

module.exports = myUploader;
