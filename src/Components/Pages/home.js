import React, { Component } from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Twitter from "../Twitter";

class HomePage extends Component {

    render() {
    return (
      <div className="App">
        <Navbar /> 
        <Twitter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;