const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  // 1st argument -> SCHEMA STRUCTURE
  {
    fullName: {
      type: String,
      required: [true, "Tell us your name?"]
    },
    email: {
      type: String,
      // required: [true, "What's your email??"],
      match: [/.+@.+/, "Emails need an @ sign"]
    },
    encryptedPassword: {
      type: String,
      // required: [true, "We need a password!"]
    },

    //facebook users
    facebookID: { type: String },

    //google users
    googleID: { type: String }
  },
  // 2nd argument -> SETTING object
  {
    // automatically add "createdAt" and "updateAt" Date fields
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
