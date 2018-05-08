import React, { Component } from 'react';
import Splash from "../Components/Splash";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import './home.css';
import Youtube from "../Components/Youtube";
import Instagram from "../Components/Instagram";
import Twitter from "../Components/Twitter";


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      hasError: false,
      sidebar: false,
      youtube: false,
      instagram: false,
      twitter: false
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  showSidebar() {
    this.setState({ sidebar: !this.state.sidebar })
  }

  showYoutube() {
    this.setState({ youtube: !this.state.youtube })
  }
  showInstagram() {
    this.setState({ instagram: !this.state.instagram })
  }
  showTwitter() {
    this.setState({ twitter: !this.state.twitter })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="App">
      
        {this.state.loggedIn ?
          <div>
            <Navbar sidebar={this.showSidebar.bind(this)} />
            <Footer />
          </div>
          : <div>
            <Splash />
          </div>
        }
<div id="feeds">
        {this.state.sidebar ?
          <Sidebar
            youtube={this.showYoutube.bind(this)}
            instagram={this.showInstagram.bind(this)}
            twitter={this.showTwitter.bind(this)}
          /> : null}

        {this.state.youtube ?
          <Youtube /> : null}

        {this.state.instagram ?
          <Instagram /> : null}

        {this.state.twitter ?
          <Twitter /> : null}
          </div>
      </div>

    );
  }
}

export default HomePage;


