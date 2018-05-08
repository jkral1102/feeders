import React, { Component } from 'react';
import './about.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import pic1 from "../Assets/Images/profileImg1.jpg";
import pic2 from "../Assets/Images/profileImg2.jpg";
import pic3 from "../Assets/Images/profileImg3.jpg";
import pic4 from "../Assets/Images/profileImg4.jpg";
import pic5 from "../Assets/Images/profileImg5.jpg";

class AboutPage extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div id="wrapper">

          <div id="aboutTeam">
            <h1> About Us</h1>
            <p>There are hundreds of social media sites on the menu. With Feeders you don't have to keep getting
              bothered by all those alerts on your phone and going into all those apps.
              You wouldn't eat the ingrediants of a meal separately, would you?</p>

            <p>Feeders is to serve you ALL your favorite social media sites into one bite.</p>
          </div>

          <div id="cards">

            <div id="card"><a href="https://www.linkedin.com"><img src={pic1} alt="Jennifer" id="name" />
              <span>Jennifer Kral</span></a></div>
            <div id="card"><a href="https://www.linkedin.com"><img src={pic2} alt="David" id="name" />
              <span>David Lopez</span></a></div>
            <div id="card"><a href="https://www.linkedin.com"><img src={pic3} alt="Tyler" id="name" />
              <span>Tyler Staney</span>
            </a></div>
            <div id="card"><a href="https://www.linkedin.com"><img src={pic4} alt="Heather" id="name" />
              <span>Heather A.</span>
            </a></div>
            <div id="card"><a href="https://www.linkedin.com"><img src={pic5} alt="Emren" id="name" />
              <span>Emren Ingvoldstad</span>
            </a></div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;