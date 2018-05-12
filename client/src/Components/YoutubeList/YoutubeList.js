import React, { Component } from 'react'
import './YoutubeList.css'

class YoutubeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoID: props.videoID,
           
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleVideoClick(this.props.videoID)
    }
    render() {

        return(
            <div id="list" onClick={this.handleClick} >
                <img src={this.props.image} alt="" /><p>{this.props.title}</p>
            </div>

        )
    }
}

export default YoutubeList;