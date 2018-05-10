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
            youtube: false,
        };

        this.clickTwitter = this.clickTwitter.bind(this);
        this.clickInstagram = this.clickInstagram.bind(this);
        this.clickYoutube = this.clickYoutube.bind(this);
    
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



    render() {
        console.log("these are props in sidebar", this.props)
        return (
            <div className="sidebar">
                <div id="tabs">
                    <span onClick={this.props.clickTwitter}>Twitter</span>
                    <span onClick={this.props.clickInstagram}>Instagram</span>
                    <span onClick={this.props.clickYoutube}>Youtube</span>
                    {/* {this.state.twitter ? <Twitter /> : null}
                    {this.state.instagram ? <Instagram /> : null}
                    {this.state.youtube ? <Youtube /> : null} */}
                </div>
            </div>
        );
    }
}

export default Sidebar;
