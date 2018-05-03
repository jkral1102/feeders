const db = require("../models");

// Defining methods for the Signup Controller
module.exports = {
  findAll: function(req, res) {
    db.Signup
      .find(req.query)
      .sort({ id: -1 })
      .then(dbSignup => res.json(dbSignup))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Signup
      .findById(req.params.id)
      .then(dbSignup => res.json(dbSignup))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      console.log(req.body)
    db.Signup
      .create(req.body)
      .then(dbSignup => {
          console.log(dbSignup)
          return res.json(dbSignup)
        })
      .catch(err => {
          console.log(err)
          return res.status(422).json(err)
      });
  },
//   create: function(req, res) {
//     const signup = {
//       _id: req.body._id,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//     };
//     db.Signup
//       .create(signup)
//       .then(dbSignup => res.json(dbSignup))
//       .catch(err => res.status(422).json(err));
//   },
  update: function(req, res) {
    db.Signup
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbSignup => res.json(dbSignup))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Signup
      .findById({ _id: req.params.id })
      .then(dbSignup => dbSignup.remove())
      .then(dbSignup => res.json(dbSignup))
      .catch(err => res.status(422).json(err));
  }
};
