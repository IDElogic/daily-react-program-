import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
return (
<div>
<Navbar/>
  <header className='home' id='home'>
    <div className='glass'>
      <h1 className='h-glass'></h1>
      <div></div>
    </div>
    <h1 className='h-regular'></h1>
  </header>
<Footer/>
<ScrollToTop/>
</div>
 ) 
};

export default Home;