import React, { Component } from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import "./signup.css";
import SignupForm from "./signupForm";

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
          
            <SignupForm onChange={fields => this.onChange(fields)} />
        
      
        </div>
     
    );
  }
}

export default SignupPage;