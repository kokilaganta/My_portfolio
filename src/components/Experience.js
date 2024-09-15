import React from 'react';
import '../css/Experience.css';

class Experience extends React.Component {
    render() {
        return (
            <div className="experience-main">
                <div className="exp-head">
                Extracurricular Activities
                </div>
                <div className="exp-box">
                    <Expcomponent
                      name="Singing is Love"
                      description="A deep passion for music and singing, participating in various performances and events to express creativity and connect emotionally with audiences."
                      timestart="Ongoing"
                   />
                    
                    <Expcomponent
                        name="Main Coordinator of Student Cultural Organization"
                        description="Leading and managing a student cultural organization, organizing events, enhancing teamwork, and nurturing individual talents to foster a vibrant cultural community."
                        timestart="May, 2024"
                        timeend="Ongoing"
                    />
                </div>
                <div className="exp-box">
                    <Expcomponent
                        name="Public Speaking"
                        description="Engaged in public speaking and debate activities, developing skills in communication, persuasion, and audience engagement through various speaking engagements."
                        timestart="Ongoing"
                    />
                  
                </div>
            </div>
        );
    }
}
class Expcomponent extends React.Component {
    render() {
        return (
            <div className="exp-component">
                <div className="exp-name">
                    {this.props.name}
                </div>
                <div className="exp-description">
                    {this.props.description}
                </div>
                <div className="exp-time">
                {this.props.timestart} - {this.props.timeend ? this.props.timeend : "Present"}
                </div>
            </div>
        );
    }
}
export default Experience