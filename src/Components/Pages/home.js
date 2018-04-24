import React, { Component } from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Cards from "../Cards";
import Twitter from "../Twitter";

class HomePage extends Component {

    render() {
    return (
      <div className="App">
        <Navbar /> 
        <Cards />
        <Twitter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;