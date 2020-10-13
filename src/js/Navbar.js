import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import hamburger from '../images/hamburger.svg';
import tw from '../images/twitter.svg';
import fb from '../images/facebook.svg';
import ins from '../images/instagram.svg';
import '../css/Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((state) => ({
      open: !state.open,
    }));
  }

  render() {
    return (
      <div className={this.state.open ? "navbar is-open" : "navbar" }>
        <div className="topnav">
          <div className="logo">
            <NavLink to="/" className="active link">
              <img className="logo" src={logo} alt="Periodismo feminista de América Latina" />
            </NavLink>
            <button className="menu" id="hamburger" onClick={this.toggleMenu}>
              <img
                className="hamburger-icon"
                src={hamburger}
                alt="Ícono de menú desplegable"
              />
            </button>
          </div>
          <div className="links">
            <button className="menu-close" onClick={this.toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/></svg>
            </button>
            <NavLink to="/" className="active link">
              Perfiles
            </NavLink>
            <NavLink to="/about" className="link">
              Mapa
            </NavLink>
            <NavLink to="/marcos-de-referencia" className="link">
              Artículos
            </NavLink>
            <div className="item share">
              <a className="icon" href="www.twitter.com" alt="Compartir en Twitter">
                <img src={tw} alt="Twitter logo" />
              </a>
              <a className="icon" href="www.facebook.com" alt="Compartir en Facebook" >
                <img src={fb} alt="Facebook icon" />
              </a>
              <a className="icon" href="www.instagram.com" alt="Compartir en Instagram">
                <img src={ins} alt="Instagram logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
