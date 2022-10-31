import React from "react";
import "./contact.css";
import ReusableHeader from "../ReusableHeader";

// TODO: stopped here
// build form layout
// connect form response to EmailJS service

const Contact = () => {
  const contactHeaderProps = {
    header: "contact",
    paragraph:
      "Feel free to contact me by submitting the form below, and I'll get back to you as soon as possible",
  };

  return (
    <section id="contact" className="contact-section-wrapper">
      <ReusableHeader {...contactHeaderProps} />
    </section>
  );
};

export default Contact;
