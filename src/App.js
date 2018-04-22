import React, { Component } from 'react';
import './App.css';
// All components 
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Navbar /> 
        <Cards />
        <Footer/>
      </div>
    );
  }
}

export default App;
