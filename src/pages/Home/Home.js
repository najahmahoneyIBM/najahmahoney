import React from 'react'
import Nav from '../../components/Navbar/Nav'
import SplitBackground from '../../components/SplitBackground/SplitBackground'

const Home = () => {
  return (
      <div className="split-background">
        <Nav/>
        <SplitBackground />
              <h1 className="text-center">Najah Mahoney</h1>
              <p>I'm a web developer and designer based in London, UK.</p>
      </div>
    
  )
}

export default Home