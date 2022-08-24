import React from 'react'
import Nav from '../../components/Navbar/Nav'
import SplitBackground from '../../components/SplitBackground/SplitBackground'
import "@fontsource/poppins";
import "./Home.css";
import headshot from '../../assests/headshot/colorpic.jpg'


const Home = () => {
  return (
    <div>
      
      <Nav />
      <img src={headshot} alt="colorpic" className="colorpic"/>
      <h1 className='name'>Najah Mahoney</h1>
      <SplitBackground />
    </div>

  )
}

export default Home