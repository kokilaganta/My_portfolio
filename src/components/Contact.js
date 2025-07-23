import React from 'react';
import '../css/Contact.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-main">
        <div className="contact-head">
          Contact Me
        </div>
        <div className="contact-comp">
          <div className="icons">
            <a href="https://github.com/kokilaganta" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/ganta-kokila-99a508261" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="icons">
            <a href="mailto:gantakokilaa@gmail.com">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
