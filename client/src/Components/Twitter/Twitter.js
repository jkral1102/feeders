import React, { Component } from 'react'
import './Twitter.css'
import { Timeline } from 'react-twitter-widgets'
import logo from './twitter.png'



class Twitter extends Component {
  constructor() {
    super();

    this.state = {
      screenName: "",
      searchClick: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      screenName: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchClick: !this.state.searchClick
    });

  }

  render() {
    // Conditionally render twitter if twitter search button was clicked
    let TwitterFeed = this.state.searchClick === true ?

      <Timeline style={this.twitterStyle}
        dataSource={{
          sourceType: 'profile',
          screenName: this.state.screenName
        }}
        options={{
          username: this.state.screenName,
          height: '400'
        }}
        onLoad={() => console.log('Timeline is loaded!')}
      />
      : null;

    return (
      <div id="twitter">
      
        <form onSubmit={this.handleSubmit}>
        <a href='https://www.twitter.com'><img id="twitterLogo" src={logo} alt="Twitter" /></a>
          <input id="twitterInput" type="text" onChange={this.handleChange} placeholder="Search Twitter" />
       
          <input type="submit" value="Submit" />
        </form>

        {TwitterFeed}

      </div>
    );
  }
}


export default Twitter;