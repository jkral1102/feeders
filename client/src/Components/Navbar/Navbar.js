import React, { Component } from 'react';
import './Navbar.css';
import slogan from './slogan.png';
import Sidebar from '../Sidebar';
import styled from 'styled-components';


class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settingsClicked: false,
      toggleSidebar: false
    };

    this.showLogin = this.showLogin.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  showLogin = () => {
    this.setState({
      settingsClicked: !this.state.settingsClicked
    });
  }
  toggleVisibility = () => {
    if(this.state.toggleSidebar === true){
      this.setState({toggleSidebar: false});
    } else{
      this.setState({
        toggleSidebar: true
      });
    }
  };

  render() {
    const { visible } = this.state
    return (
      <div className="row navbar">
        <div className="col-2 col-s-3">
          <i className="fa fa-cogs gear" alt="login" id="loginIcon" onClick={this.toggleVisibility} />
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
        {this.state.toggleSidebar ? <Sidebar /> : null}
      </div>
    );
  }
}

export default Navbar;
