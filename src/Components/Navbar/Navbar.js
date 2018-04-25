import React, { Component } from 'react';
import './Navbar.css';
import FacebookLogin from "../FacebookLogin";
//import loginLogo from './loginLogo.png';
import slogan from './slogan.png';
import loginbtn from './icon.png';


class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      loginClicked: false
    };

    this.showLogin = this.showLogin.bind(this);

  }
  showLogin = () => {
    this.setState({
      loginClicked: !this.state.loginClicked
    });
  }

  render() {
    return (
      <div id="navbar">

        {/* Logo click - displays Facebook login btn by first setting state to loginClicked: true */}
        
        <img src={loginbtn} alt="login" id="loginIcon" onClick={this.showLogin} />

        {/* (Conditional Rendering of the Facebook component) - if loginClicked: true, display component */}
        <div id="fbLogin">
        {this.state.loginClicked ? <FacebookLogin /> : null}
        </div>

        <div id="sloganDiv">
        <img src={slogan} alt="login" id="slogan" onClick={this.showLogin} />
        </div>
      
        {/* Navbar links  */}
        <div className="menu">
          <ul className="menu-items">
            <li><a href="https://www.google.com">Home</a></li>
            <li><a href="/signup">Sign up</a></li>
            <li><a href="https://www.google.com">About</a></li>
            <li><a href="https://www.google.com">Upgrade to Premium</a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Navbar;
