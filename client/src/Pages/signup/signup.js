import React, { Component } from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';

// import logo from "./logo.svg";
import "./signup.css";
import Form from "./form";

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
    
        <div className="signup">
          
            <Form onChange={fields => this.onChange(fields)} />
        
      
        </div>
     
    );
  }
}

export default SignupPage;