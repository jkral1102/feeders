import React, { Component } from 'react';
import './Sidebar.css';
import Instagram from "../Instagram";
import Twitter from "../Twitter";
import Youtube from "../Youtube";

class Sidebar extends Component {
    constructor() {
        super();

        this.state = {
            twitter: false,
            instagram: false,
            youtube: false
        };

        this.clickTwitter = this.clickTwitter.bind(this);
        this.clickInstagram = this.clickInstagram.bind(this);
        this.clickYoutube = this.clickYoutube.bind(this);
        this.showInstagram = this.showInstagram.bind(this);
        this.showTwitter = this.showTwitter.bind(this);
        this.showYoutube = this.showYoutube.bind(this);
    }

    clickTwitter = () => {
        this.setState({ twitter: !this.state.twitter });
    }

    clickInstagram = () => {
        this.setState({ instagram: !this.state.instagram });
    }

    clickYoutube = () => {
        this.setState({ youtube: !this.state.youtube });
    }

    showTwitter() {
        if (this.state.twitter === true) {
            return (
                <Twitter />
            )
        }
    }
    showInstagram() {
        if (this.state.instagram === true) {
            return (
                <Instagram />
            )
        }
    }

    showYoutube() {
        if (this.state.youtube === true) {
            return (
                <Youtube />
            )
        }
    }



    render() {
        return (
            <div className="sidebar">
                <div id="tabs">
                    <span onClick={this.clickTwitter}>Twitter</span>
                    <span onClick={this.clickInstagram}>Instagram</span>
                    <span onClick={this.clickYoutube}>Youtube</span>
                    {this.showTwitter()}
                    {this.showInstagram()}
                    {this.showYoutube()}
                </div>
            </div>
        );
    }
}

export default Sidebar;
