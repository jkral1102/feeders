import React, { Component } from 'react';
//import { Google } from 'react-oauth2';
import { GoogleLogin } from 'react-google-login'; //https://www.npmjs.com/package/react-google-login
//import { GoogleLogout } from 'react-google-login';
// OAuth clientID 680037376516-1g36hpip6hpd9qhhu75v7n9b1tbd0n37.apps.googleusercontent.com
// OAuth client secret K-Q6b4wJxacI6ScUgpvAk0s3
// List of Google APIs that Google OAuth allows access to: https://developers.google.com/apis-explorer/#p/ (Major: Youtube, gmail, calendar)

class Google extends Component {

  constructor() {
    super();

    this.state = {
      data: ""
    };

    // this.handleClick = this.handleClick.bind(this)
    this.responseGoogle = this.responseGoogle.bind(this)
  };

  // handleClick() {

  // }

  // change up these functions to arrows 
  responseGoogle(response) {
    console.log(response);
    // In the responseGoogle(response) {...} callback function, you should get back a standard JWT located at response.hg.id_token
    var jwt = response.tokenId
    console.log(jwt)
    this.queryAPI(jwt)
    // Have your server decode the id_token by sending a GET request to https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=YOUR_TOKEN_HERE
  }
    queryAPI(jwt) {
    fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + jwt).then(function(response) {
      return response.json();
    })
    // The returned decoded token should have an hd key equal to the hosted domain you'd like to restrict to.
    .then(function(myJson) {
      console.log(myJson);
    });
  }

// In the responseGoogle(response) {...} callback function, you should get back a standard JWT located at response.hg.id_token
// Send this token to your server (preferably as an Authorization header)
// Have your server decode the id_token by using a common JWT library such as jwt-simple or by sending a GET request to https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=YOUR_TOKEN_HERE
// The returned decoded token should have an hd key equal to the hosted domain you'd like to restrict to.


  render() {
    // id="googleBtn" onClick={this.handleClick}>
    return (
      <div>
        <GoogleLogin
        // create clientID here: https://console.developers.google.com/apis/dashboard?project=proj3-202301&duration=PT1H
        // Google's OAuth guide for authentication - https://developers.google.com/identity/protocols/OpenIDConnect
          clientId="680037376516-o8dkktpj7phhorui3e26u6cknvijj36n.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
    />

      </div>
    )
  }
}


export default Google;
