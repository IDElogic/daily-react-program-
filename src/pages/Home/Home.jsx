import React, {useState} from 'react';
import Tabs  from '../../components/Tabs/Tabs';
import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';
import './Home.css';
import Profile from '../../components/Profile/Profile';

const Home = () => {
  const [showCountdown, setShowCountdown] = useState(true);
return (
<div>
  <Navbar/>
  <header className='home' id='home'>
    <div className='glass'>
      <h1 className='h-glass'>React</h1> 
      <div>
      <span className='span'>Welcome Here</span>
    </div>
    </div>
    <h1 className='h-regular'>Projects</h1> 
  </header> 
  <Profile/>
  <Tabs/>
  <Footer/>
  <ScrollToTop/>
</div>
 ) 
};

export default Home;