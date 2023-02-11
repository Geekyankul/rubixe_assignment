import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form_container">
        <div className="form_left">
          <h1>GET IN TOUCH</h1>
          <p>Please complete the form and we will get back to you</p>
        </div>

        <div className="form_right">
          <label>Name*</label>
          <input type="text" placeholder="Enter Your Name" />
          <label>Email*</label>
          <input type="email" placeholder="Enter Your Email" />
          <label>Mobile Number*</label>
          <input placeholder="Enter Your Mobile Number" />
          <button>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
