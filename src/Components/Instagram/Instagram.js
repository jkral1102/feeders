import React, { Component } from 'react';
import './Instagram.css';
import InstagramEmbed from 'react-instagram-embed'

class Instagram extends Component {


    render() {
        return (
            <div id="instagramFeed">


                <InstagramEmbed
                    url='https://instagr.am/p/Zw9o4/'
                    maxWidth={320}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    onLoading={() => { }}
                    onSuccess={() => { }}
                    onAfterRender={() => { }}
                    onFailure={() => { }}
                />
            </div>


        );
    }
}

export default Instagram;

