import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import logo from "./logo.svg";
import "./signup.css";
import Form from "./form";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

injectTapEventPlugin();

class SignupPage extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <Navbar /> 
            <Form onChange={fields => this.onChange(fields)} />
            <br />
            <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SignupPage;