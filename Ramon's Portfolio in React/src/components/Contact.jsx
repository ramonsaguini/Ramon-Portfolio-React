import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="border p-4">
        <h2 className="mb-4" id="contact">Contact Me</h2>
        <div className="row">
          <div className="col">
            <a href="https://www.instagram.com/ramon_saguini" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className="col">
            <a href="https://www.facebook.com/ramon.saguinideandrade" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          <div className="col">
            <a href="https://github.com/ramonsaguini" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <div className="col">
            <a href="mailto:ramon_saguini1@hotmail.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/in/ramon-andrade-a40728277/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
