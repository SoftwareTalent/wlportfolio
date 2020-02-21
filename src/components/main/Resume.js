import React, { Component } from 'react';
import EducationItem from './EducationItem';
import ResumeItem from './ResumeItem';
import SkillItem from './SkillItem';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const colors = [
      "#5cb85c",
      "#f0ad4e",
      "#337ab7",
      "#d9534f",
      "#5bc0de"
    ];

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            { resumeData.education && resumeData.education.map((item, index) => <EducationItem key={index} item={item} />) }
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            { resumeData.work && resumeData.work.map((item, index) => <ResumeItem key={index} item={item} />) }
          </div> 
        </div>

        <div className="row skill">
          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                  { resumeData.skills && resumeData.skills.map((item, index) => <SkillItem key={index} item={item} color={colors[index % colors.length]}/>) }
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}