import React, { Component } from 'react';
import { Google } from 'react-oauth2';

class Google extends Component {

      constructor() {
        super();
    
        this.state = {
          data: ""
          
        };
      }

  google(err, res) {
    if (!err) {
      this.setState({ data: res.profile })
    } else {
      this.setState({ data: 'something happen wrong' })
    }
  },

  render() {
    return 
    
    <div>
      <Google
        url={'http://localhost:3000/'}
        clientId={'680037376516-85c17p21fcef13gf8rapeptjk7on1log.apps.googleusercontent.com'}
        clientSecret={''}
        redirectUri={'http://localhost:3000/'}
        scope={'email,user_location'}
        width={300}
        height={300}
        callback={this.google}
        style={{ color: 'green' }}
      >
        Login With Google From component
  </Google>
      <hr />
      {JSON.stringify(this.state)}
    </div>
  }
});

export default Google;
