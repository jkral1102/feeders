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
        return (
            <div id="container">
                <div id="infoDiv">

                    <div>
                        <strong>Authors</strong>

                        <a href="https://www.google.com">Emren</a>
                        <a href="https://www.google.com">Jennifer</a>
                        <a href="https://www.google.com">David</a>
                        <a href="https://www.google.com">Heather</a>
                        <a href="https://www.google.com">Tyler</a>
                    </div>
                    <div id="socialDiv">
                        <strong> Social</strong>
                        <a href="https://www.google.com">Twitter</a>
                        <a href="https://www.google.com">Facebook</a>
                        <a href="https://www.google.com">Flickr</a>
                        <a href="https://www.google.com">Instagram</a>
                    </div>
                </div>

                <div id="footerlogoDiv">
                    <img id="footerLogo" src={footerLogo} alt="logo" />
                </div>


                <div id="copyright">
                    <p>Feeders</p>
                    <p>©2018 UMN Bootcamp</p>
        {/* <p id="slogan"><em>For all your social media needs.</em></p> */}
                </div>


            </div>


        );
    }
}

export default Footer;

