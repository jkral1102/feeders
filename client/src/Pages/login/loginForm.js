import React from "react";
//import TextField from "material-ui/TextField";
//import Button from "material-ui/Button";
import { TextField, RaisedButton } from "material-ui";
import axios from 'axios'
//import { FORMERR } from "dns";
import './login.css'



class LoginForm extends React.Component {
  constructor() {
    super();


    this.state = {
      username: "",
      //usernameError: "",
      password: "",
      //passwordError: "",
    };

    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  change = e => {
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

  onSubmit(un, pw) {
    var self = this;
    
    axios.get('/api/signups')
      .then(function (res) {
        console.log(res.data);
         var data = res.data;
         for (var i=0; i < data.length; i++) {
           if (data[i].username === un && data[i].password === pw) {
              self.handleLogin();
              return;
           }
          }
      })
      .catch(function (err) {
        console.log(err.res);
      });
  }

  handleLogin() {
    this.props.handleLogin();
    }

  render() {
    return (
      <div id='loginContainer'>
        <div id='loginForm'>
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
          <RaisedButton label="Submit" onClick={() => this.onSubmit(this.state.username, this.state.password)} primary />
        </div>
      </div>
    );
  }
}

export default LoginForm; 