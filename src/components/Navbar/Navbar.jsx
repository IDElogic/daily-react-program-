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
        <li><a href="#search">Search from List</a></li>
        <li><a href="#tabs">Tabs</a></li>
        <li><a href="#random">Random Generator</a></li>
        <li><a href="pageNotFound>">Accordion</a></li>
        <li><a href="/pageNotFound">Slider</a></li>
        <li><a href="/pageNotFound">Visibility Toggle</a></li>
        <li><a href="#footer">Contact</a></li>  
      </ul>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={24} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex-center slide-bottom">
            <GiHamburgerMenu fontSize={24} className="overlay-close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen-links">
              <li><a href="#search" onClick={() => setToggleMenu(false)}>Search from List</a></li>
              <li><a href="#tabs" onClick={() => setToggleMenu(false)}>Tabs</a></li>
              <li><a href="#random" onClick={() => setToggleMenu(false)}>Random Generator</a></li>
              <li><a href="/pageNotFound" onClick={() => setToggleMenu(false)}>Accordion</a></li>
              <li><a href="/pageNotFound" onClick={() => setToggleMenu(false)}>Slider</a></li>
              <li><a href="/pageNotFound" onClick={() => setToggleMenu(false)}>Visibility Toggle</a></li>
              <li><a href="#footer" onClick={() => setToggleMenu(false)}>Contact</a></li>   
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;