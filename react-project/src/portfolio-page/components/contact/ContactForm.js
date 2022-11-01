import React from "react";
import "./contactForm.css";

// TODO: stopped here
// styles contact form

const ContactForm = () => {
  return (
    <div className="container">
      <div className="col-xs-12">
        <div className="styled-input wide">
          <input type="text" id="name" name="name" required />
          <label htmlFor="name">Name</label>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="styled-input">
          <input type="text" id="email" name="email" required />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="styled-input" style={{ float: "right" }}>
          <input type="text" id="phoneNumber" name="phoneNumber" required />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>
      </div>
      <div className="col-xs-12">
        <div className="styled-input wide">
          <textarea id="textField" name="textField" required></textarea>
          <label htmlFor="textField">Message</label>
        </div>
      </div>
      <div className="col-xs-12">
        {/* <div className="btn-lrg submit-btn">Send Message</div> */}
        <button className="btn">Send Message</button>
      </div>
    </div>
  );
};

export default ContactForm;
