import React, { Component } from 'react';
import Splash from "../Components/Splash";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import Sidebar from "../Components/Sidebar";
//import Google from "../Components/Google";
import './home.css';
import Instagram from "../Components/Instagram";
import Twitter from "../Components/Twitter";
import Youtube from "../Components/Youtube";



class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      hasError: false,
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
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }




  render() {
    console.log("this is the state!", this.state);
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    //  {/* if they're not logged in show the splash page and then Modal (onClick) ... 
    // if they are logged in show the components we want on the homepage */}

    let showPage = this.state.loggedIn ?
      <div className="containerHome">
        <div className="row">
          <div className="col-12 size" id="navbarDiv">
            <Navbar 
            clickTwitter={this.clickTwitter}
            clickInstagram={this.clickInstagram}
            clickYoutube={this.clickYoutube}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4 size">
            {this.state.twitter ? <Twitter /> : null}
          </div>
          <div className="col-4 size">
            {this.state.instagram ? <Instagram /> : null}
          </div>
          <div className="col-4 size">
            {this.state.youtube ? <Youtube /> : null}
          </div>
        </div>
        <Footer />
      </div>
      : <Splash />

    return (
      <div className="App">
        {showPage}

      </div>

    );
  }
}

export default HomePage;


