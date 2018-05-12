import React, { Component } from 'react'
import './Navbar.css'
import slogan from './slogan.png'
import dropdown from './dropdown.png'
//import settingsGear from './settingsGear.png'
import Settings from '../Settings'

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <div id='gearDiv'>
                    <img src={dropdown} id="gear" alt="login" onClick={this.props.sidebar} />
                </div>

                <div id="sloganDiv">
                    <img src={slogan} alt="login" id="slogan" />
                </div>
                <Settings />
                <div id='menuDiv'>


                    <ul className="menu-items">
                        <li><a href="/about">About Us</a></li>
                        <li id='rightLink'><a href="/">Home</a></li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Navbar;
