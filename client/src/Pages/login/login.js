import React, { Component } from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';

// import logo from "./logo.svg";
import LoginForm from "./form";

injectTapEventPlugin();

class LoginPage extends Component {
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
    
        <div className="login">
          
            <Form onChange={fields => this.onChange(fields)} />
        
      
        </div>
     
    );
  }
}

export default LoginPage;