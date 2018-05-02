import React, { Component } from 'react'
import './Splash.css'
import Login from "../Login";
import SignupPage from "../../Pages/signup/signup";
import "./particles.json";



class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: false,
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState({
          isToggleOn: !this.state.isToggleOn
        });
      }

    

  render() {
   
    return (
      <div className="splash">
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

          <a href="#" className="link" onClick={this.handleClick}>
              Login
          </a>
          <a href="/Pages/signup/signup" className="link" onClick={}> Sign Up </a>
        
        </div>
        <div className="col-1">
        
        </div>
      </div>
        <div className="row"> 
        <div className="col-12 size">
        
        </div>
        </div>
        <Login open={this.state.isToggleOn} />
        <SignupPage />
      </div>
    );
  }
}


export default Splash;