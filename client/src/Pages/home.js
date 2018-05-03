import React, { Component } from 'react';
import Splash from "../Components/Splash";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
//import Google from "../Components/Google";
import './home.css';



class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }




  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    //  {/* if they're not logged in show the splash page and then Modal (onClick) ... 
    // if they are logged in show the components we want on the homepage */}

    let showPage = this.state.loggedIn ?
      <div>
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
      : <Splash />

    return (
      <div className="App">
        {showPage}

      </div>

    );
  }
}

export default HomePage;


