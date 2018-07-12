import React from "react";
import { TextField, RaisedButton } from "material-ui";
import axios from 'axios'
import './signup.css'


class signupForm extends React.Component {
  state = {
    firstName: "",
    //firstNameError: "",
    lastName: "",
    //lastNameError: "",
    username: "",
   // usernameError: "",
    // email: "",
    // emailError: "",
    password: "",
    //passwordError: ""
  };

  change = e => {
    //this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // validate = () => {
  //   let isError = false;
  //   const errors = {
  //     firstNameError: "",
  //     lastNameError: "",
  //     usernameError: "",
  //     emailError: "",
  //     passwordError: ""
  //   };

  //   if (this.state.username.length < 5) {
  //     isError = true;
  //     errors.usernameError = "Username needs to be atleast 5 characters long";
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
    axios.post('/api/signups', {
      // firstName: this.state.firstName,
      // lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    })

    //this.props.showSignup()
  }
  
  

    // this.props.onSubmit(this.state);
    // const err = this.validate();
    // if (!err) {
    //   // clear form
    //   this.setState({
    //     firstName: "",
    //     firstNameError: "",
    //     lastName: "",
    //     lastNameError: "",
    //     username: "",
    //     usernameError: "",
    //     email: "",
    //     emailError: "",
    //     password: "",
    //     passwordError: ""
    //   });
    //   this.props.onChange({
    //     firstName: "",
    //     lastName: "",
    //     username: "",
    //     email: "",
    //     password: ""
    //   });
    
  

  render() {
            
        // <TextField
        //   name="email"
        //   hintText="SamSmith@email.com"
        //   floatingLabelText="Email"
        //   value={this.state.email}
        //   onChange={e => this.change(e)}
        //   errorText={this.state.emailError}
        //   floatingLabelFixed
        // />
        // <br />
    return (
      <div id='signupForm'>
      <form>
        <TextField
          name="firstName"
          hintText="Sam"
          floatingLabelText="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          errorText={this.state.firstNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="lastName"
          hintText="Smith"
          floatingLabelText="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          errorText={this.state.lastNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="username"
          hintText="SamSmith123"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          errorText={this.state.usernameError}
          floatingLabelFixed
        />
        <br />

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
        <br />
        <RaisedButton label="Submit" onClick={this.onSubmit.bind(this)} primary/>
      </form>
      </div>
    );
  }
}

export default signupForm; 