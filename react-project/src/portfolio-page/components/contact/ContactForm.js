import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v6x0y86",
        "template_0o049xt",
        form.current,
        "Pih5jdhkODYDHSF8u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Message successfully sent✔");
    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
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
            <textarea id="message" name="message" required></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <div className="col-xs-12 btn-wrapper">
          <button className="btn form-btn">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
