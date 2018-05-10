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


class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <div>
          <i className="fa fa-cogs gear" alt="login" id="loginIcon" onClick={this.props.sidebar} />
        </div>

        <div>
          <img src={slogan} alt="login" id="slogan" />
        </div>

        <div>
          <ul className="menu-items">
            <li><a href="/about">About</a></li>
            <li><a href="/signup">Sign up</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
