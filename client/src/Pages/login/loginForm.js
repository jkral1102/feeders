import React from "react";
//import TextField from "material-ui/TextField";
//import Button from "material-ui/Button";
import { TextField, RaisedButton } from "material-ui";
import axios from 'axios'

class LoginForm extends React.Component {
  constructor() {
    super();


    this.state = {
      username: "",
      usernameError: "",
      password: "",
      passwordError: ""
    };

    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  change = e => {
    //this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // validate = () => {
  //   let isError = false;
  //   const errors = {
  //     usernameError: "",
  //     passwordError: ""
  //   };

  //   if (this.state.username.length < 5) {
  //     isError = true;
  //     errors.usernameError = "Username needs to be at least 5 characters long";
  //   }

  //   if (this.state.email.indexOf("@") === -1) {
  //     isError = true;
  //     errors.emailError = "Requires valid email";
  //   }

  //   this.setState({
  //     ...this.state,
  //     ...errors
  //   });

  //   return isError;
  // };

  onSubmit() {
    axios.get('/api/signups/login', {
      username: this.state.username,
      password: this.state.password,
    })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  render() {
    return (
      <form>
        <TextField
          name="username"
          hintText="SamSmith123"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          errorText={this.state.usernameError}
          type="username"
          floatingLabelFixed
        />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          errorText={this.state.passwordError}
          type="password"
          floatingLabelFixed
        />
        <RaisedButton label="Submit" onClick={this.onSubmit} primary />
      </form>
    );
  }
}

export default LoginForm; 