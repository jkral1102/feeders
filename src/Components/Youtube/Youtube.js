import React, { Component } from 'react'
import './Youtube.css'
//api key = AIzaSyCPhwbf5bXmhAJ0qawFjlNLaaNPLXPevvc
//import axios from 'axios'
import YouTube from 'react-youtube'


class Youtubes extends Component {
  constructor() {
    super();

    this.state = {
        search: "",
        youtubeSearch: "",
        searchClick: false,
        videoID: "",
        video: []

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.VideoList = this.VideoList.bind(this);
  }
  VideoList() {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCPhwbf5bXmhAJ0qawFjlNLaaNPLXPevvc&part=snippet,id&order=date&maxResults=20')
      .then(resp => resp.json())
      .then((resp) => {
        //console.log(resp);
        //this.setState({video: resp.results});
        this.setState({video: resp.items});
        console.log(this.state.video);
        this.renderVideo()
      });
    }

    renderVideo() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
      this.state.video.forEach((element, index) => {
        //console.log(item);
        this.setState({
            videoID: element.id.videoId
          });
          console.log(this.state.videoID);
          //alert(this.state.videoID);
      })
      // this.state.videoID.map((element, index) => {
      // return (
      //   <YouTube
      //     videoID=element
      //     opts={opts}
      //     onReady={this._onReady}
      //   />
      // );
    //})
  }
    
  handleChange(event) {
    this.setState({
      search: event.target.value,
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchClick: !this.state.searchClick
    });
    // Youtube ajax request for search!
    this.VideoList();
  }

  render() {
    // Conditionally render twitter if twitter search button was clicked
    // let YoutubeFeed = this.state.searchClick === true ?
    //     <YouTube
    //     videoId={this.state.videoId}
    //     opts={opts}
    //     onReady={this._onReady}
    //     />
    //     : null;
    //     {YoutubeFeed}

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input id="youtubeInput" type="text" onChange={this.handleChange} placeholder="Search Youtube" />
          <input type="submit" value="Submit" />
        </form>
   


      {this.renderVideo}

      </div>
    );
  }
}


export default Youtubes;