import React, { Component } from 'react';
//import './App.css';

//importing router for multiple pages
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './Pages/home';
import AboutPage from './Pages/about';
//import SettingsPage from './Pages/settings';

import LoginPage from './Pages/login/loginForm';
import SignupPage from './Pages/signup/signup';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      //creating router to have multiple pages
      <MuiThemeProvider>

      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          {/* <Route path="/settings" component={SettingsPage} /> */}
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />

          
          {/* <Route component={NoMatch} /> */}
        </div>
      </Router>
      </MuiThemeProvider>

      
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
