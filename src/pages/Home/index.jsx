import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import Roadmap from '../../views/Roadmap'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Roadmap/>
      <Footer/>
    </div>
  )
}

export default Home
