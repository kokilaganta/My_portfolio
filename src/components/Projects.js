import React from 'react';
import '../css/Projects.css';


class Projects extends React.Component {
    render() {
        return (
            <div className="projects-main">
                <div className="projects-head">
                    Projects
                </div>
                <Projectcomponent
                    name="WhrilMail"
                    code=""
                    desc="WhirlMail is a simple yet powerful Flask-based web app for sending mass emails 
                    with ease. Upload a CSV of recipients, compose your subject and message, and let WhirlMail handle the rest.
Simple Flask app to send mass emails from a CSV list
Upload file, customize subject and message, and send instantly
Validates emails and shows which addresses are invalid"
                    imag="https://i.pinimg.com/736x/60/b5/b7/60b5b7635eec5c7c8e353eb09b23b9d0.jpg"
                />
                <Projectcomponent
                    name="DiaScan"
                    code=""
                    desc="DiaScan is a web app developed using Python and machine learning algorithms to help 
                    users assess their risk of diabetes. By analyzing user inputs, 
                    it provides quick and accurate predictions to support early detection and proactive health management"
                    imag="https://i.pinimg.com/736x/73/f3/af/73f3af5244cc0e0d29b8ad528a62c70a.jpg"
                />
               

            </div>
        );
    }
}
class Projectcomponent extends React.Component {

    render() {
        return (
            <div className="project">
                <div className="project-text">
                    <div className="project-name">
                        {this.props.name}
                    </div>
                    <div className="project-desc">
                        {this.props.desc}
                    </div>
                    <div className="project-link">
                        <a href={this.props.code}  className="pro-link">Click for Source Code</a>
                    </div>
                </div>
                <div className="project-img">
                    <img src={this.props.imag} className="pro-img" alt="project"/>
                </div>
            </div>
        );
    }
}

export default Projects