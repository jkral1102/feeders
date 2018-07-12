import React, { Component } from 'react';
import './Footer.css';
import footerLogo from './footerLogo.png';

class Footer extends Component {
    handleResponse = (data) => {
        console.log(data);
    }

    handleError = (error) => {
        this.setState({ error });
    }

    render() {
        // <div>
        //     <p>Feeders</p>
        //     <p>©2018 UMN Bootcamp</p>
        //     {/* <p id="slogan"><em>For all your social media needs.</em></p> */}
        // </div>
        return (
            <div id="footer">

                <ul className="menu-items">
                    <li><a href="/about">About Us</a></li>
                    <li id='rightLink'><a href="/">Home</a></li>
                </ul>


                <div id='footerDivs'>


                    <div>
                        <img id="footerLogo" src={footerLogo} alt="logo" />
                    </div>

                    <div id='infoDiv'>
                        <strong> Social</strong>
                        <a href="https://www.google.com">Twitter</a>
                        <a href="https://www.google.com">Facebook</a>
                        <a href="https://www.google.com">Flickr</a>
                        <a href="https://www.google.com">Instagram</a>
                    </div>
                </div>

            </div>


        );
    }
}

export default Footer;