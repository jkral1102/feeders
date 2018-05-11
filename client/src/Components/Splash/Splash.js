import React, { Component } from 'react'
import './Splash.css'
//import './particles.json';
import Login from '../../Pages/login/loginForm'
import Signup from '../../Pages/signup/signupForm'


//https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router



class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignup: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
  }


  showLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    });
    if(this.state.showSignup === true) {
      this.setState({
        showSignup: false
      })
    }
  }

  showSignup() {
    this.setState({
      showSignup: !this.state.showSignup
    });
    if(this.state.showLogin === true) {
      this.setState({
        showLogin: false
      })
    }
  }


  render() {

    return (
      <div id='splashContainer'>

        <div className="splash">
            <div>
              <h2>FEED ME</h2>
              <p className="sub"> An App for all your social media.</p> 
            </div>

            <div>
              {/* <a href="/login" className="link" onClick={this.handleClick}> */}
              <a className="link" onClick={this.showLogin}> Login </a>
              <a className="link" onClick={this.showSignup}> Sign Up </a>
            </div>
        </div>

        {this.state.showLogin ? <Login showLogin={this.showLogin} handleLogin={this.props.handleLogin} /> : null}
        {this.state.showSignup ? <Signup showSignup={this.showSignup} /> : null}
      </div>
    );
  }
}


export default Splash;