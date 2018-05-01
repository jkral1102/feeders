import React, { Component } from 'react'
import './Youtube.css'
//api key = AIzaSyCPhwbf5bXmhAJ0qawFjlNLaaNPLXPevvc
import axios from 'axios'
import Youtube from 'react-youtube'


class Youtube extends Component {
  constructor() {
    super();

    this.state = {
        search: "",
        youtubeSearch: "",
        searchClick: false,
        videoId: ""

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    searchNew(search);


  }

searchNew = (search) => {
    // var authKey = "AIzaSyCPhwbf5bXmhAJ0qawFjlNLaaNPLXPevvc";
    // var apiURL = "https://www.googleapis.com/youtube/v3/search" + "&part=snippet" + "&key=" + authKey  + "&q=" + search
    // // "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?
    // // &part=snippet&order=viewCount&type=video&videoDefinition=high&q=" + search

    // var authOptions = {
    //     "async": true,
    //     method: 'GET',
    //     url: queryURL,
    //     dataType: 'json'
    //   };

      function searchByKeyword() {
        var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
      
        for(var i in results.items) {
          var item = results.items[i];
          Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
        }
      }
      // axios.get(searchByKeyword)
// axios.get(apiURL, authOptions)
      // .then(function(response) {
        // console.log(response)
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }


// return axios(authOptions)
// .then((response) => {
//   // grab relevant response data
//   //var data = response.data;
//   var data = response.data
// //   this.setState({
// //     youtubeSearch: data
// //   })
//   console.log(data);
// })
// .catch((error) => {
//   console.log(error);
// });
// }





  render() {
    // Conditionally render twitter if twitter search button was clicked
    let YoutubeFeed = this.state.searchClick === true ?
        <YouTube
        videoId={this.state.videoId}
        opts={opts}
        onReady={this._onReady}
        />
        : null;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Youtube:
            <input id="youtubeInput" type="text" onChange={this.handleChange} placeholder="Search Youtube" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {YoutubeFeed}

      </div>
    );
  }
}


export default Youtube;