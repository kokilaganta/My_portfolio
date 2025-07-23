import React from 'react';
import '../css/Skills.css';

class Skills extends React.Component {
  render() {
    return (
      <div className="skill-main">
        <div className="skill-head">Skills</div>

        <div className="skill-box">
          <SkillComponent name="C" />
          <SkillComponent name="HTML" />
          <SkillComponent name="CSS" />
          <SkillComponent name="JavaScript" />
        </div>

        <div className="skill-box">
          <SkillComponent name="Java" />
          <SkillComponent name="ReactJS" />
          <SkillComponent name="Python" />
          <SkillComponent name="RPA" />
        </div>

        <div className="skill-box">
          <SkillComponent name="MongoDB" />
          <SkillComponent name="Bootstrap" />
          <SkillComponent name="Oracle" />
          <SkillComponent name="AJAX" />
        </div>

        <div className="skill-box">
          <SkillComponent name="Data Structures" />
          <SkillComponent name="MySQL" />
          <SkillComponent name="Node.js" />
          <SkillComponent name="Express.js" />
        </div>

        <div className="skill-box">
          <SkillComponent name="Decision Making" />
          <SkillComponent name="Problem Solving" />
          <SkillComponent name="Digital Marketing" />
        </div>
      </div>
    );
  }
}

class SkillComponent extends React.Component {
  render() {
    return <div className="skill-component">{this.props.name}</div>;
  }
}

export default Skills;
