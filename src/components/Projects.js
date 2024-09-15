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
                    name="PropPredictor AI"
                    code=""
                    desc="The project successfully developed a robust 
                    predictive model that estimates house prices with high accuracy. 
                    The insights gained from the model can be used to assist real estate 
                    professionals, potential buyers, and investors in making informed decisions."
                    imag="https://media.licdn.com/dms/image/D5612AQHuM6PfDFMH3w/article-cover_image-shrink_720_1280/0/1709662087918?e=2147483647&v=beta&t=eNrN7LG4l7tpDpg6Ovf3rWPK2vo2qZMaDPwnzZdKcQE"
                />
                <Projectcomponent
                    name="ReactFetch Fun"
                    code=""
                    desc="The project provides a foundational example of integrating 
                    an API with React, making it an excellent starting point for learning
                     about data fetching and state management in React applications."
                    imag="https://i.pinimg.com/564x/08/33/8d/08338d01bfffd01cb686e350c03ed187.jpg"
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