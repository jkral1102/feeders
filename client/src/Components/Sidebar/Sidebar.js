import React, { Component } from 'react';
import './Sidebar.css';
import twitterLogo from '../../Assets/Images/twitterLogo.png'
import youtubeLogo from '../../Assets/Images/youtubeLogo.png'
import instagramLogo from '../../Assets/Images/instagramLogo.png'


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">

                <div id='sidebarTitle'>
                    <h1>My Feeds</h1>
                </div>

                <div id="tabs">
                    {/* <span id="feed" onClick={this.props.twitter}>Twitter</span>
                    <span id="feed" onClick={this.props.instagram}>Instagram</span>
                    <span id="feed" onClick={this.props.youtube}>Youtube</span> */}
                    <div id='feedDiv'>
                        <img id="feed" alt='logo' src={twitterLogo} onClick={this.props.twitter} />
                    </div>

                    <div id='feedDiv'>
                        <img id="feed" alt='logo' src={youtubeLogo} onClick={this.props.youtube} />
                    </div>
                    <div id='feedDiv'>
                        <img id="feed" alt='logo' src={instagramLogo} onClick={this.props.instagram} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Sidebar;
