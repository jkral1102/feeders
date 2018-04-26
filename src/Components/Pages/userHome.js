import React, { Component } from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Twitter from "../Twitter";

class UserHomePage extends Component {

    render() {
    return (
      <div className="App">
       <div className="App">
        <div className="row">
          <div className="col-12">
            <Navbar /> 
          </div>
        </div>
        <div className="row">
          <div className="col-2">
          
          </div>
          <div className="col-8">
            <Twitter/>
          </div>
          <div className="col-2">
          
          </div>
        </div>
        <div className="row"> 
          <div className="col-12">
            <Footer/>
          </div>
        </div>
      </div>
        
          
      </div>
    );
  }
}

export default UserHomePage;