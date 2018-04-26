import React, { Component } from 'react';
import './App.css';
// All components 
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Twitter from "./Components/Twitter";
//import Instagram from "./Components/Instagram";

class App extends Component {
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

export default App;
