import React from "react";
import Rubic2 from "../../images/rubic2.jpg";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>WHO ARE WE</h1>
          <p>
            Rubixe™ is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI), Machine Learning.
            Robotic Process Automation (RPA),BlockChain, and Internet of Things
            (IoT).
          </p>
          <p>
            Rubixe mission is to enable businesses to leverage the full
            potential of disruptive technologies and stay competitive in the
            market, turning complex challenges into solutions, providing a
            strategic competitive advantage are more efficient, effective and
            predictable.
          </p>
        </div>
        <div className="right">
          <div className="img_container">
            <img src={Rubic2} className="img" alt="pic" />
          </div>
        </div>
      </div>
      <div className="about1">
        <h1>WHERE WE STARTED</h1>
        <p>
          We started in 2015, With a passionate team whollivant to bring
          game-changing solutions through disrupting technologies. We expertise
          in delivering enterprise-level solutions in the field of Artificial
          Intelligence (Al), Cyber Security, Robotic Process Automation (RPA),
          Internet of Things (IoT), and BlockChain technology.
        </p>
      </div>
    </>
  );
};

export default About;
