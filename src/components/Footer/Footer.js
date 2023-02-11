import React from 'react';
import './Footer.css'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer_container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    <div>
                        <p>Novel Tech Park,1st floor, Hosur Rd, Bengaluru</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    +91 8888888888
                    </h4>            
                </div>
                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    hr@rubixe.com
                    </h4>            
                </div>
            </div>
                       
            <div className='right'>
                <h4>About Us</h4>
                <p>Rubixe™ is a global technology company specializing in disruptive
                  technologies - Artificial Intelligence (AI), Machine Learning.
                  Robotic Process Automation</p>
                <div className='social'>
                <a href='https://www.facebook.com/'><FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}} /></a>
                <a href='https://www.linkedin.com/'><FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}} /></a>
                <a href='https://www.instagram.com/'><FaInstagram size={30} style={{color:'#fff', marginRight:'1rem'}} /></a>
                    
                </div>
            </div>
        </div>
    </div>
    <div class='footer-bottom'>
        <p>copyright 2020-2023 | Rubixe is a brand of THINK AHEAD INNOVATION PVT. LTD.|
        All rights reserved </p>
    </div>
    </>
  )
}

export default Footer;