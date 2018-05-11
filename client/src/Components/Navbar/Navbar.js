// import React, { Component } from 'react';
// import './Navbar.css';
// import slogan from './slogan.png';


// class Navbar extends Component {
//   render() {
//     return (
//       <div className="row navbar">
//         <div className="col-2 col-s-3">
//           <i className="fa fa-cogs gear" alt="login" id="loginIcon" onClick={this.props.sidebar} />
//         </div>

//         <div className="col-5 col-s-9">
//           <img src={slogan} alt="login" id="slogan" />
//         </div>
//         <div className="col-5  links">
//           <ul className="menu-items">

//             <li><a href="/about">About</a></li>
//             <li><a href="/signup">Sign up</a></li>
//             <li><a href="/">Home</a></li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Navbar;



import React, { Component } from 'react';
import './Navbar.css';
import slogan from './slogan.png';
import dropdown from './dropdown.png';


class Navbar extends Component {
  render() {
    // <li><a href="/signup">Sign up</a></li>
    // <li><a href="/">Home</a></li>
    //<i className="fa fa-cogs gear" alt="login" onClick={this.props.sidebar} />
    return (
      <div id="navbar">
        <div id='gearDiv'>
          
        <img src={dropdown} id="gear" alt="login" onClick={this.props.sidebar} />
          </div>

        <div id="sloganDiv">
          <img src={slogan} alt="login" id="slogan" />
        </div>

        <div id='menuDiv'>
          <ul className="menu-items">
            <li><a href="/about">About Us</a></li>
            <li><a href="/about">How it works</a></li>
       
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
