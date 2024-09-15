import React from 'react';
import '../css/Skills.css';

class Skill extends React.Component {
    render() {
        return (
            <div className="skill-main">
                <div className="skill-head">
                    Skills
                </div>
                <div className="skill-box">
                    <Skillcomponent
                        name="C"
                    />
                    <Skillcomponent
                        name="HTML"
                    />
                    <Skillcomponent
                        name="CSS"
                    />
                    <Skillcomponent
                        name="Javascript"
                    />
                </div>
                <div className="skill-box">
                    <Skillcomponent
                        name="Java"
                    />
                    <Skillcomponent
                        name="ReactJS"
                    />
                    <Skillcomponent
                        name="Python"
                    />
                    <Skillcomponent
                        name="RPA"
                    />
                </div>
                <div className="skill-box">
                    <Skillcomponent
                        name="MongoDB"
                    />
                    <Skillcomponent
                        name="Bootstrap"
                    />
                    <Skillcomponent
                        name="Oracle"
                    />
                    <Skillcomponent
                        name="AJAX"
                    />
                </div>
                <div className="skill-box">
                    <Skillcomponent
                        name="Python"
                    />
                    <Skillcomponent
                        name="Data Structures"
                    />
                    <Skillcomponent
                        name="MySQL"
                    />
                    <Skillcomponent
                        name="Node"
                    />
                </div>
                <div className="skill-box">
                    <Skillcomponent
                        name="Express"
                    />
                    <Skillcomponent
                        name="Decision Making"
                    />
                    <Skillcomponent
                        name="Problem Solving"
                    />
                    <Skillcomponent
                        name="Digital Marketing"
                    />
                </div>
            </div >
        );
    }
}

class Skillcomponent extends React.Component {
    render() {
        return (
            <div className="skill-component">
                {this.props.name}
            </div>
        );
    }
}
export default Skill