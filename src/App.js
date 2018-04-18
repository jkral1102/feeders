import React, { Component } from 'react';
import './App.css';
// All components 
import Card from "./Components/Cards";
// import Facebook from "./Components/Facebook";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar /> 
        {/* <Facebook /> */}
        
        <Card
            {// tab={card.tab}}
            {// title={card.title}}
            {// text={card.text}}
        />

      </div>
    );
  }
}

export default App;
