import React, { Component } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

class AboutPage extends Component {

    render() {
    return (
      <div className="App">
      <Navbar />


      {/* The purpose of Feeders */}
      <h1> About Our Team!!</h1>
        <p>There are hundreds of social media sites on the menu. With Feeders you don't have to keep getting 
          bothered by all those alerts on your phone and going into all those apps. 
          You wouldn't eat the ingrediants of a meal separately, would you? <br></br>

          Feeders is to serve you ALL your favorite social media sites into one bite.
        </p>


          {/* Team cards */}
          {/* <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            
          />
        ))}
          </Wrapper> */}



          <Footer/>
      </div>
    );
  }
}

export default AboutPage;