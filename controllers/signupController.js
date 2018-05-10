const db = require("../models");

// Defining methods for the Signup Controller
module.exports = {

  findOne: function(req, res) {
    console.log(req.body.username)
  //  db.Signup.findOne({'username': req.body.username})
  //      .then(function(obj) {
  //        res.json(obj)
  //        console.log(obj);
  //      })
  //      .catch(err => res.status(422).json(err));
  //     .catch(function(err) {
  //       console.log('butt');
  //       res.status(422).json(err);
  //     }) , 'password': req.body.password

//   db.Signup
//   .findOne(req.query)
//   .then(data => res.json(data))
//   //.catch(err => res.status(422).json(err));
 },


  create: function(req, res) {
    db.Signup
      .create(req.body)
      .then(data =>{
         res.json(data)
        })
      .catch(err => 
        res.status(422).json(err));
  },
};
  // findById: function(req, res) {
  //   db.Signup
  //     .findById(req.params.id)
  //     .then(dbSignup => res.json(dbSignup))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   console.log(req.body)
  //   //db.Signup.findOne({'userName': req.body.username}).exists(false).create(req.body)
  //   //db.Signup.findOne({'userName': req.body.username}).create(req.body)
  //   db.Signup.create(req.body)  
  //   .then(data => {
  //         console.log(data)
  //         return res.json(data)
  //       })
  //     .catch(err => {
  //         console.log(err)
  //         return res.status(422).json(err)
  //     });
  //   }
  //   db.Signup.update({noExist: true}, {"$setOnInsert": {'userName': req.body.username}}, {upsert: true})
  // }
  //   db.Signup.find({'userName': req.body.username}), function (err, docs) {
  //       if (!obj.length){
  //         console.log('Success!', obj)
  //         return res.json(obj)
  //       }else{
  //           user.save(function(err){
  //               cb(err,user);
  //           });
  //       }
  // },


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

