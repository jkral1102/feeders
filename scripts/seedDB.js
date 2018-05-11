const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/signuplist"
);

const signSeed = [
  {
    lastName: "Joe",
    firstName: "Moe",
    userName: "Jman",
    email: "some@email.com",
    password: "qwert"
  },
  {
    lastName: "Jane",
    firstName: "Shane",
    userName: "Js",
    email: "some@email.com",
    password: "123456"
  },
 ];

db.Signup
  .remove({})
  .then(() => db.Signup.collection.insertMany(signSeed))
  .then(data => {
    console.log(data);
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
