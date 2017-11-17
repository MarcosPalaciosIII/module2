const express = require("express");
const UserModel = require("../models/user-model");
const RoomModel = require("../models/room-model");

const router = express.Router();


router.get("/admin/users", (req, res, next) => {
  // if not an admin show the 404 page (as if this doesn't even exist)
  if(req.user === undefined || req.user.role !== "admin") {
    next(err);
    return;
  }
  UserModel
  .find()
  .limit(25)
  .sort({ updatedAt: -1 })
  .exec()
  .then((userResults) => {
    res.locals.listOfUsers = userResults;
    res.locals.bodyClass = "admin";
    res.render("admin-views/user-list");
  })
  .catch((err) => {
    next(err);
  });
});


router.get("/admin/rooms", (req, res, next) => {
  // if not an admin show the 404 page (as if this doesn't even exist)
  if(req.user === undefined || req.user.role !== "admin") {
    next(err);
    return;
  }
  RoomModel
  .find()
  .limit(25)
  .sort({ createdAt: -1 })
  .exec()
  .then((roomResults) => {
    res.locals.listOfRooms = roomResults;
    res.locals.bodyClass = "admin";
    res.render("admin-views/all-rooms-list");
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
