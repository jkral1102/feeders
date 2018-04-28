import React, { Component } from 'react';
import './Instagram.css';
import InstagramEmbed from 'react-instagram-embed'
//  var key = '4108368018.1677ed0.8ce16b5c16ae4909b1772d4d9818db76'

class Instagram extends Component {
    
    constructor() {
        super();
    
        this.state = {
          searchClick: false,
          userURL: "",
          searchURL: 'https://www.instagram.com/joerogan/?hl=en'
          
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showInstagram = this.showInstagram.bind(this);
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
        this.showInstagram();
      }

    showInstagram() {
        // var url = this.state.url ? this.state.url : 'https://www.instagram.com/joerogan/?hl=en'
//         this.setState({ searchURL: "" })

       
//             if (this.state.userURL > 0) {
//                 this.setState({ searchURL: this.state.userURL })
// }
        return(
            <div id="instagram">
            <InstagramEmbed
            url='https://instagr.am/p/Zw9o4/'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}

        />
        </div>
        )
    }

render() {
//     <form onSubmit={this.handleSubmit}>
//     <input id="instagramInput" type="text" onChange={this.handleChange} placeholder="Embed an Instagram url" />
//     <input type="submit" value="Submit" />
// </form>
    return (

        <div id="instagram">


        {this.showInstagram()}
        </div>
    );
    }
}

export default Instagram;

