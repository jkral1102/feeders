import React, { Component } from 'react';
import './App.css';
// All components 
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Twitter from "./Components/Twitter";

class App extends Component {
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

export default App;
