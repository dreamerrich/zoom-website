import React, { Component } from "react";
import Chat from './Chat';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand" href="#">
              Zooming
            </p>
              <ul className="navbar-nav" style={{color:'white'}}>
                <li className="nav-item dropdown">
                    Product
                </li>
                <li className="nav-item dropdown">
                    Solutions
                </li>
                <li className="nav-item dropdown">
                    Resources
                </li>
                <li className="nav-item dropdown">
                    Plans & Pricing
                </li>
              </ul>
            </div>
        </nav>
        <div className="chat">
            <Chat />
        </div>
      </div>
    );
  }
}

export default Header;
