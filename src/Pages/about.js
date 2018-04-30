import React, { Component } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

class AboutPage extends Component {

    render() {
    return (
      <div className="App">
      <Navbar />
      <h1> About us page!!</h1>
        
          <Footer />
      </div>
    );
  }
}

export default AboutPage;