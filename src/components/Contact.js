import React from 'react';
import '../css/Contact.css';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMediumSquare } from "react-icons/ai";
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
                        <a href="https://github.com/kokilaganta">
                            <AiFillGithub/>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="linkedin.com/in/ganta-kokila-99a508261">
                            <AiFillLinkedin/>
                        </a>
                    </div>
                   
                    <div className="icons">
                        <a href="https://medium.com/@gantakokilaa">
                            <AiFillMediumSquare/>
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

export default Contact