import React, { Component } from 'react';
import './pinterest.css';
 

class Pinterest extends Component {

constructor() {
    super();

    this.state = {
        searchClick: false,
        userURL: "https://www.pinterest.com/<username>/<board>.rss",
        searchURL: 'https://www.pinterest.com/<username>/feed.rss'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showPinterest = this.showInstagram.bind(this);
}

handleChange(event) {
    this.setState({
        userURL: event.target.value
    });
}
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            searchClick: !this.state.searchClick
        });
        this.showPinterest();
    };
}
