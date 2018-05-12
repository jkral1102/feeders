import React, { Component} from 'react';
import './Facebook.css';
import FacebookProvider, { Login, Like } from 'react-facebook';

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
          {/* Facebook login - see react-facebook NPM documentation here: https://www.npmjs.com/package/react-facebook */}
          <FacebookProvider appId="446798905751855">
            <Login
              scope="email"
              onResponse={this.handleResponse}
              onError={this.handleError}
            >
              <span>Login via Facebook</span>
            </Login>

            <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
          </FacebookProvider>
      </div>
    );
  }
}

export default Facebook;

