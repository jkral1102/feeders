import React, { Component } from 'react';
import './Settings.css';


class Settings extends Component {
    render() {
        return (
            <div id="settings">
                <div id="settingsTabs">

                    <div class="dropdown">
                        <button class="dropbtn">
                            Settings
                        </button>
                        <div class="dropdown-content">
                            <a href="https://www.google.com">How It Works</a>
                            <a href="https://www.google.com">Feed Settings</a>
                            <a href="https://www.google.com">Theme</a>
                            <a href="https://www.google.com">Settings</a>
                            <a href="https://www.google.com">Help</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Settings;
