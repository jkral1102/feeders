import React, { Component } from 'react';
//import './App.css';

//importing router for multiple pages
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './Pages/home';
import AboutPage from './Pages/about';
import SettingsPage from './Pages/settings';

//import LoginPage from './Pages/login';
//import SignupPage from './Pages/signup';



class App extends Component {
  render() {
    return (
      //creating router to have multiple pages
      // <Route path="/userhome" component={UserHomePage} /> - Chang
      //<Route path="/signup" component={SignupPage} />
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/settings" component={SettingsPage} />
          
          {/* <Route component={NoMatch} /> */}
        </div>
      </Router>

      
    );
  }
}

// const NoMatch = ({ location }) => (
//   <div>
//     <h3>
//       No match for <code>{location.pathname}</code>
//     </h3>
//   </div>
// );

export default App;
