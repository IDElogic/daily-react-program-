import React from 'react';
import { FiFacebook,FiTwitter, FiInstagram} from 'react-icons/fi';
import { images } from '../../constants';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import './Footer.css';

const Footer = () => (
<div className='footer' id='footer'>
   <DownloadButton/>
  <div className='footer-glass-container'>
  <div className='footer-links' >
      <div className='footer-links-contact'>
          <h1 className='footer-headtext'>Sections</h1>
          <a href=""><p className='p'>Modal</p></a>
          <a href=""><p className='p'>Counter</p></a>
          <a href=""><p className='p'>Random Generator</p></a>
      </div>
      <div className='footer-links-logo'>      
        
        <a href='/contact'><p className='p'>Contact </p></a> 
        <img src={images.sticky} alt="..." style={{ margin: '2rem  0'}} />
        <div className='footer-links-icons'>
        <a href="https://facebook.com"><FiFacebook /></a>
        <a href="https://twitter.com"><FiTwitter /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        </div>
      </div>
      <div className='footer-links-work'>
          <h1 className='footer-headtext'>Projects</h1>
          <a href=""><p className='p'>Accordion</p></a> 
          <a href=""><p className='p'>Profile List With Search</p></a>
          <a href=""><p className='p'>Password Visibility Toggle</p></a>
          
      </div>
    </div> 
  </div>
  <div className='footer-copyright'>
      <a href='http://blibb.net'><p className='p'>2022 by Me, All rights reserved</p></a>
  </div> 
  
</div>
);

export default Footer;



             
              
             