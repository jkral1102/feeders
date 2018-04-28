import React, { Component } from 'react';
import "./splash/home.css";
import "./splash/particles.json";



class HomePage extends Component {


  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


    render() {
    return (
      <div className="App splash">
        <div className="row">
          <div className="col-12 size">
            {/* <h1>Header</h1> */}
          </div>
        </div>
        <div className="row">
          <div className="col-1">
          
          </div>
          <div className="col-5">
            <div> 
              <h2>FEED ME</h2>
              <p> An App for all your social media.</p> </div>
          </div>
          <div className="col-5">
            {/* <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Login' : 'OFF'} */}
            <a href="/userhome" className="link">  Login </a>
            <a href="https://www.google.com" className="link"> Sign Up </a>
            {/* </button> */}
          </div>
          <div className="col-1">
          
          </div>
        </div>
          <div className="row"> 
          <div className="col-12 size">
            {/* <h1>Footer</h1> */}
          </div>
          </div>
      </div>
        
    );
  }
}

export default HomePage;


