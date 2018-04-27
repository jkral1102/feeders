import React, { Component } from 'react';
import Navbar from "../Navbar";

import Footer from "../Footer";
import './home.css';

class HomePage extends Component {

    render() {
    return (
      <div className="App">
        <Navbar /> 
        <Footer/>
      </div>
    );
  }
}

export default HomePage;