import React, { Component} from 'react';
import './Facebook.css';
import FacebookProvider, { Login } from 'react-facebook';

class Facebook extends Component {
  handleResponse = (data) => {
    console.log(data);
  }
 
  handleError = (error) => {
    this.setState({ error });
  }
 
  render() {
    return (
      <div>
      
          <FacebookProvider appId="446798905751855">
            <Login
              scope="email"
              onResponse={this.handleResponse}
              onError={this.handleError}
            >
              <span>Login via Facebook</span>
            </Login>
          </FacebookProvider>
      </div>
    );
  }
}

export default Facebook;

