import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div id="tabs">
                    <span id="feed" onClick={this.props.twitter}>Twitter</span>
                    <span id="feed" onClick={this.props.instagram}>Instagram</span>
                    <span id="feed" onClick={this.props.youtube}>Youtube</span>
                </div>
            </div>
        );
    }
}

export default Sidebar;
