import React, { Component } from 'react';
import './about.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import linkedinLogo from "../Assets/Images/linkedin.png";
// profile pics
import jen from "../Assets/Images/jen.png";
import david from "../Assets/Images/david.png";
import heather from "../Assets/Images/heather.png";
import emren from "../Assets/Images/profilePlaceholder.jpg";
import tyler from "../Assets/Images/tyler.jpg";



class AboutPage extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div id="wrapper">

          <div id="aboutTeam">

            <div id='aboutTitle'>
              <h1> About Feeders</h1>
            </div>
            <div id="aboutText">


              <p>
                There are hundreds of social media sites on the menu. With Feeders you don't have to keep getting
              bothered by all those alerts on your phone and going into all those apps.
              You wouldn't eat the ingrediants of a meal separately, would you?


            </p>

              <p>Feeders is to serve you ALL your favorite social media sites into one bite.</p>
            </div>
          </div>

          <div id='teamDiv'>
            <div id='teamTitle'>
              <h1> Meet Our Team!</h1>
            </div>
            <div id="cards">

              <div>
                <img src={david} alt="david" id="card" />

                <a href="https://www.linkedin.com/in/dwlopez91" alt='linkedin'>
                  <p id="name"> David Lopez </p>
                  <img id='linkedinLogo' src={linkedinLogo} alt='linkedIn' />

                </a>
              </div>

              <div>
                <img src={jen} alt="Jennifer" id="card" />
                <div id='contact'>

                  <a href="https://www.linkedin.com/in/jennifer-kral-050b56161/">
                    <p id="name"> Jennifer Kral </p>
                    <img id='linkedinLogo' src={linkedinLogo} alt='linkedIn' />

                  </a>
                </div>
              </div>

              <div>
                <img src={heather} alt="heather" id="card" />

                <a href="https://www.linkedin.com/in/heather-akpan-322023127">
                  <p id="name"> Heather Akpan </p>
                  <img id='linkedinLogo' src={linkedinLogo} alt='linkedIn' />

                </a>
              </div>

              <div>
                <img src={tyler} alt="tyler" id="card" />

                <a href="https://www.linkedin.com/">
                  <p id="name"> Tyler Stanley </p>
                  <img id='linkedinLogo' src={linkedinLogo} alt='linkedIn' />

                </a>
              </div>

              <div>
                <img src={emren} alt="emren" id="card" />

                <a href="https://www.linkedin.com/in/emren-ingvoldstad-574441102/">
                  <p id="name"> Emren Ingvoldstad </p>
                  <img id='linkedinLogo' src={linkedinLogo} alt='linkedIn' />

                </a>
              </div>

            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;