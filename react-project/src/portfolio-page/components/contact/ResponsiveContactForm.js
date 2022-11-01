import React from "react";
import "./ResponsiveContactForm.css";

const ResponsiveContactForm = () => {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value=""
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value=""
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="alt-send-button">
              <i className="fa fa-paper-plane"></i>
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">Lagos, Nigeria</span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:+234-810-028-3294" title="Give me a call">
                    +2348100283294
                  </a>
                </span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a
                    href="mailto:alexanderolalekanoweka@gmail.com"
                    title="Send me an email"
                  >
                    alexanderolalekanoweka@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li>
              <a
                href="https://github.com/AlexOla-NG"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-oweka-6bb086166/"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/OwekaAlexander"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            {/* <li>
              <a href="#" target="_blank" rel="noreferrer" className="contact-icon">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li> */}
          </ul>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default ResponsiveContactForm;
