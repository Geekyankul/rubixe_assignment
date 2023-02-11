import React from 'react';
import HeroImage from "../../images/heroimg.jpeg";
import './Heroimg.css';

const Heroimg = () => {
  return (
    <div className="hero">
        <img src={HeroImage} alt="img" />
    </div>
  )
}

export default Heroimg;