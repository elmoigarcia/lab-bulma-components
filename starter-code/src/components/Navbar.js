import React, { Component } from 'react';
import CoolButton from './CoolButton';

export default class Navbar extends Component {

  render() {
    return (
      <div>
      <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
        </a>
      </div>
    
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
            <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
            <CoolButton isSmall isSuccess>Signup</CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
    )
  }
}