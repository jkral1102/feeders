const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  username: { type: String, required: false },
  //email: { type: String, required: true },
  password: { type: String, required: false }
});

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;
