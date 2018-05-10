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
            <div className="container">
                {/* <div className="row">
                    <div className="col-5 size" id="authors">
                        <strong>Authors</strong>
                        <a href="https://www.google.com">Emren</a>
                        <a href="https://www.google.com">Jennifer</a>
                        <a href="https://www.google.com">David</a>
                        <a href="https://www.google.com">Heather</a>
                        <a href="https://www.google.com">Tyler</a>
                    </div>
                    <div className="col-.5 size" id="slashLine">
                        <p> | </p>
                    </div>
                    <div className="col-5 size" id="social">
                        <strong> Social</strong>
                        <a href="https://www.google.com">Twitter</a>
                        <a href="https://www.google.com">Facebook</a>
                        <a href="https://www.google.com">Flickr</a>
                        <a href="https://www.google.com">Instagram</a>
                    </div> 
                </div>

                <div className="row">
                    <div className="col-12 size" id="footerlogoDiv">
                        <img id="footerLogo" src={footerLogo} alt="logo" />
                    </div>
                </div> */}

                <div className="row">
                    <div className="col-12 size" id="sloganDiv">
                        <p>One place for all your feeds #feedMe</p>
                    </div>
                    <div className="col-12 size" id="copyright">
                        <a href="https://github.com/dwlopez91/feeders" target="_blank">Feeders | ©2018 UMN Bootcamp</a>
                    </div>
                </div>


            </div>


        );
    }
}

export default Footer;

