import React from 'react'
import Footer from '../components/Footer/Footer'
import Form from '../components/Form/Form'
import Heroimg from '../components/Heroimg/Heroimg'
import Navbar from '../components/navbar/Navbar'

const services = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <h1>Our Services</h1>
      <Form />
      <Footer />
    </div>
  )
}

export default services