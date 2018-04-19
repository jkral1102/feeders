import React, { Component } from 'react';
import './App.css';
// All components 
// import Facebook from "./Components/Facebook";
import Card from "./Components/Cards";
import Navbar from "./Components/Navbar";


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Navbar /> 
        {/* <Facebook /> */}
        <Card />
            
      </div>
    );
  }
}

export default App;
