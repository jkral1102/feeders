const db = require("../models");

// Defining methods for the Signup Controller
module.exports = {

  findAll: function (req, res) {

    db.Signup.find({}, 'username password', function (err, data) {
      //console.log(data);
      res.json(data)
    })
  },

  create: function (req, res) {
    db.Signup
      .create(req.body)
      .then(data => {
        res.json(data)
      })
      .catch(err =>
        res.status(422).json(err));
  }
};



  // update: function(req, res) {
  //   db.Signup
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbSignup => res.json(dbSignup))
  //     .catch(err => res.status(422).json(err));
  // },

  // remove: function(req, res) {
  //   db.Signup
  //     .findById({ _id: req.params.id })
  //     .then(dbSignup => dbSignup.remove())
  //     .then(dbSignup => res.json(dbSignup))
  //     .catch(err => res.status(422).json(err));
  // }

