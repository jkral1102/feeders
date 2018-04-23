import React, { Component } from 'react';
import './Twitter.css';
import { Timeline } from 'react-twitter-widgets'
import { Tweet } from 'react-twitter-widgets'


class Twitter extends Component {
  constructor() {
    super();

    this.state = {
      username: ""
    };
}

  render() {
    return (
      <div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'joerogan'
          }}
          options={{
            username: 'joerogan',
            height: '400'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />


        
    

      </div>
    );
  }
}

export default Twitter;
