import React, { Component } from 'react';
import './Sidebar.css';
import Instagram from "../Instagram";
import Twitter from "../Twitter";


class Sidebar extends Component {
    constructor() {
        super();
    
        this.state = {
          twitter: false,
          instagram: false
        };
    
        this.clickTwitter = this.clickTwitter.bind(this);
        this.clickInstagram = this.clickInstagram.bind(this);
        this.showInstagram = this.showInstagram.bind(this);
        this.showTwitter = this.showTwitter.bind(this);
    
      }

      clickTwitter = () => {
        this.setState({ twitter: !this.state.twitter }); 

        }

      clickInstagram = () => { this.setState({ instagram: !this.state.instagram }); 
        }

        showTwitter() {
            if(this.state.twitter === true) {
                return (
                    <Twitter />
                )
        }
    }
    showInstagram() {
        if(this.state.instagram === true) {
            return (
                <Instagram />
            )
    }
}

    

  render() {
    return (
      <div className="sidebar">
      <div id="tabs">
        <span onClick={this.clickTwitter}>Twitter</span>
        <span onClick={this.clickInstagram}>Instagram</span>

        {this.showTwitter()}
        {this.showInstagram()}
        </div>
    </div>
    );
  }
}

export default Sidebar;
