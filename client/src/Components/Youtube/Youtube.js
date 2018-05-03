import React, { Component } from 'react'
import './Youtube.css'
//api key = AIzaSyCPhwbf5bXmhAJ0qawFjlNLaaNPLXPevvc
//import axios from 'axios'
import YoutubeList from '../YoutubeList'
import logo from './youtube.png'
import YoutubeRender from '../YoutubeRender'


class Youtubes extends Component {
  constructor() {
    super();

    this.state = {
        search: "",
        youtubeSearch: "",
        searchClick: false,
        videos: [],
        videoClicked: false,
        videoID: ""
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      search: event.target.value,
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchClick: !this.state.searchClick,
    });
    // Youtube ajax request for search!
    this.searchYoutube(this.state.search);
  }

  handleVideoClick(id) {
    this.setState({
      videoClicked: true,
      videoID: id
    })
  }


  searchYoutube(search) {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCPhwbf5bXmhAJ0qawFjlNLaaNPLXPevvc&part=snippet,id&order=date&maxResults=20&q=' + search)
      .then(resp => resp.json())
      .then((resp) => {
        console.log(resp);
        this.setState({videos: resp.items});
      });
    }

  render() {
    return (
      <div id="youtube">
       

        <form onSubmit={this.handleSubmit}>
        <a href='https://www.youtube.com'><img src={logo} alt="" /></a>
            <input id="youtubeInput" type="text" onChange={this.handleChange} placeholder="Search Youtube" />
          <input type="submit" value="Submit" />
        </form>

        <div className="thumbnails">


    {this.state.videoClicked ? <YoutubeRender videoID={this.state.videoID}/> : null}    

        {this.state.videos.map(vid => {
          return <YoutubeList
            image={vid.snippet.thumbnails.default.url}
            title={vid.snippet.title}
            videoID={this.state.videoID}
            handleVideoClick={this.handleVideoClick}
          />
        })}
        </div>

      </div>
    );
  }
}


export default Youtubes;