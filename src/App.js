import React, { Component } from 'react';
import './App.css';

//importing router for multiple pages
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Components/Pages/home';
import UserHomePage from './Components/Pages/userHome';
import AboutPage from './Components/Pages/about';
import SettingsPage from './Components/Pages/settings';
import SignupPage from './Components/Pages/signup/signup';


class App extends Component {
  render() {
    return (
      //creating router to have multiple pages
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/userHome" component={UserHomePage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/signup" component={SignupPage} />
          {/* <Route component={NoMatch} /> */}
        </div>
      </Router>

      
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default App;
