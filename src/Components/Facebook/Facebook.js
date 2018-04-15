import React, { Component} from 'react';
//import './Facebook.css';
import FacebookProvider, { Login } from 'react-facebook';
 
export default class Facebook extends Component {
  handleResponse = (data) => {
    console.log(data);
  }
 
  handleError = (error) => {
    this.setState({ error });
  }
 
  render() {
    return (
      <FacebookProvider appId="446798905751855">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </Login>
      </FacebookProvider>
    );
  }
}

