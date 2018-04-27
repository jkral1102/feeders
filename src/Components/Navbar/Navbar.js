import React, { Component } from 'react';
import './Navbar.css';
import slogan from './slogan.png';
import Sidebar from '../Sidebar';


class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      settingsClicked: false
    };

    this.showLogin = this.showLogin.bind(this);

  }
  showLogin = () => {
    this.setState({
      settingsClicked: !this.state.settingsClicked
    });
  }

  render() {
    return (
      <div id="navbar">

        {/* Logo click - displays Facebook login btn by first setting state to loginClicked: true */}
        <i className="fa fa-cogs test" alt="login" id="loginIcon" onClick={this.showLogin}></i>

        {/* Conditional Rendering of the Sidebar component - if settingsClicked: true, display component */}
        <div>
        {this.state.settingsClicked ? <Sidebar /> : null}
        </div>

        <div id="sloganDiv">
        <img src={slogan} alt="login" id="slogan" onClick={this.showLogin} />
        </div>
      
        {/* Navbar links  */}
        <div className="menu">
          <ul className="menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/signup">Sign up</a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Navbar;
