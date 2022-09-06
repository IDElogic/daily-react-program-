import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <a href="#home"><img src={images.sticky} alt="..." style={{ marginTop: '1rem  0'}} /></a>
      </div>
      <ul className="navbar-links">
        <li><a href="">Modal</a></li>
        <li><a href="">Counter</a></li>
        <li><a href="">Random Generator</a></li>
        <li><a href="">Accordion</a></li>
        <li><a href="">Search</a></li>
        <li><a href="">Visibility Toggle</a></li>
        <li><a href="">Contact</a></li>  
      </ul>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={24} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex-center slide-bottom">
            <GiHamburgerMenu fontSize={24} className="overlay-close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen-links">
              <li><a href="" onClick={() => setToggleMenu(false)}>Modal</a></li>
              <li><a href="" onClick={() => setToggleMenu(false)}>Weather Forecast</a></li>
              <li><a href="" onClick={() => setToggleMenu(false)}>Counter</a></li>
              <li><a href="" onClick={() => setToggleMenu(false)}>Random Generator</a></li>
              <li><a href="" onClick={() => setToggleMenu(false)}>Accordion</a></li>
              <li><a href="" onClick={() => setToggleMenu(false)}>Search</a></li>
              <li><a href="" onClick={() => setToggleMenu(false)}>Visibility Toggle</a></li>
              <li><a href="" onClick={() => setToggleMenu(false)}>Contact</a></li>   
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;