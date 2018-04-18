import React, { Component } from 'react';
import './Navbar.css';
import Facebook from "../Facebook";
import loginLogo from './loginLogo.png';


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

        {/* Logo click displays Facebook login btn */}
        <img src={loginLogo} alt="login" id="icon" onClick={this.showLogin} />

        <div id="fbLogin">
        {this.state.loginClicked ? <Facebook /> : null}
        </div>

        {/* Navbar links  */}
        <div id="menu">
          <ul class="menu-items">
            <li><a href="www.google.com">Home</a></li>
            <li><a href="www.google.com">About</a></li>
            <li><a href="www.google.com">Upgrade to Premium</a></li>
          </ul>
        </div>


        <div id="title"> <div>Feeders</div>
          <div id="subtitle">Your go-to social media dashboard</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
