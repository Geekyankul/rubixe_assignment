import React from 'react'
import About from '../components/About/About'
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Form from '../components/Form/Form'
import Heroimg from '../components/Heroimg/Heroimg'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimg />
        <About />
        <Cards />
        <Form />
        <Footer />        
    </div>
  )
}

export default Home