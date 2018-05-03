import React, { Component } from 'react'
//import React from "react"
import './YoutubeRender.css'
import YouTube from 'react-youtube' 


//const YoutubeList = props => (
class YoutubeRender extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //       videoID: 
     
  //       }
    render() {
        const opts = {
          height: '300',
          width: 'auto',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
     
        return (
          <YouTube
            videoId={this.props.videoID}
            opts={opts}
            onReady={this._onReady}
          />
        );
      }
     
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default YoutubeRender;