import React, { Component } from 'react'
import './Twitter.css'
import { Timeline } from 'react-twitter-widgets'
import logo from './twitter.png'



class Twitter extends Component {
  constructor() {
    super();

    this.state = {
      screenName: "joerogan"
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({
      screenName: event.target.value
    });
  }



  render() {
    let TwitterFeed = 

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
    return (
      <div id="twitter">
      
        <div>
        <a href='https://www.twitter.com'>
          <img id="twitterLogo" src={logo} alt="Twitter" />
        </a>
          <input id="twitterInput" type="text" onChange={this.handleChange} placeholder="Search Twitter!" />

        </div>

        {TwitterFeed}

      </div>
    );
  }
}


export default Twitter;