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
    let sidebar = this.state.settingsClicked ? <Sidebar /> : null

    return (
      <div className="row navbar">
        <div className="col-2 col-s-3">
          <i className="fa fa-cogs gear" alt="login" id="loginIcon" onClick={this.showLogin} />
        </div>
        
        <div className="col-5 col-s-9">
          <img src={slogan} alt="login" id="slogan" onClick={this.showLogin} />
        </div>
        <div className="col-5  links">
          <ul className="menu-items">
            
            <li><a href="/about">About</a></li>
            <li><a href="/signup">Sign up</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        {sidebar}
      </div>
    );
  }
}

export default Navbar;
