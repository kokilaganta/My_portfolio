import React from 'react';
import '../css/About.css';
import backi from '../assets/back2.png';

class Aboutme extends React.Component {
    render() {
        return (
            <div className="home-main">
                <div className="home-head">
                    About Me
                </div>

                <div className="home">
                    <div className="home-img">
                        <img id="home-image" src={backi} alt="background"></img>
                    </div>
                    <div className="home-text">
                    <div>
  I have been curious about new technologies since childhood,
   with a particular interest in RPA, web applications, 
   digital marketing, and data science. My journey began with a
    Bachelor of Technology in Information Technology from 
    Bapatla Engineering College. Initially focused on app development,
     I found my true passion in web development after learning HTML
      and diving into JavaScript. Currently, I am learning ReactJS and
       exploring frontend web development, with plans to venture into
        backend development and become a full stack developer. 
        Alongside my tech pursuits, I enjoy competitive programming,
         contributing to open-source projects, and indulging in music and binge-watching.
</div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutme