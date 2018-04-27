import React, { Component } from 'react';
import './Instagram.css';
//import InstagramEmbed from 'react-instagram-embed'
//import InstagramLogin from 'react-instagram-login'
import InstagramAPI from 'instagram-api'



class Instagram extends Component {
    
    constructor() {
        super();
    
        this.state = {
          search: "",
          searchClick: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.instagramLogin = this.instagramLogin.bind(this);
      }
    
    
    handleChange(event) {
        this.setState({
            search: event.target.value
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        this.setState({
          searchClick: !this.state.searchClick
        });
        this.instagramLogin();
      }

    instagramLogin() {
        var key = '4108368018.1677ed0.8ce16b5c16ae4909b1772d4d9818db76'
        
        var instagramAPI = new InstagramAPI(key);

        instagramAPI.userSearch().then(function(result) {
            console.log(result.data); // user info 
            console.log(result.limit); // api limit 
            console.log(result.remaining) // api request remaining 
        }, function(err){
            console.log(err); // error info 
        });

    }

    render() {
        // let InstagramLogin = function() {
        //         var accessToken = '4108368018.1677ed0.8ce16b5c16ae4909b1772d4d9818db76'
                
        //         var instagramAPI = new InstagramAPI(accessToken);
        
        //         instagramAPI.userSelf().then(function(result) {
        //             console.log(result.data); // user info 
        //             console.log(result.limit); // api limit 
        //             console.log(result.remaining) // api request remaining 
        //         }, function(err){
        //             console.log(err); // error info 
        //         });
            
        

                    // <div id="instagramFeed">
            //   <InstagramLogin />
        return (
            <div>

            <form onSubmit={this.handleSubmit}>
            <label>
              Search Instagram:
            <input id="instagramInput" type="text" onChange={this.handleChange} placeholder="Search Instagram" />
            </label>
            <input type="submit" value="Submit" />
          </form>
{this.instagramLogin()}
            </div>
        );
    }
}

export default Instagram;

