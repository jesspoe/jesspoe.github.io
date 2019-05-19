import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Campy from '../image/campy.png'
import Guestbook from '../image/guestbook.png'
import Pet from '../image/pet.png'
import Veg from '../image/veg.png'
import Poems from '../image/poems.png'
import Resume from '../resume/Resume.pdf';


class Projects extends Component {

  render() {
    return (
      <div class="wrapper">
        <header class="about-header">
          <ul>
            <li> <Link title="Home" to="/"><h3>Home</h3></Link></li>
            <li> <Link title="About" to="/about"><h3>About</h3></Link></li>
            <li><h3><a href={Resume} target="_blank">Resume</a></h3></li>
            <li><h3><a href="mailto: jesspoe00@gmail.com" >Contact Me</a></h3></li>
          </ul>

        </header>
        <h1 align='center' className="pro-name">Projects</h1>
        <div class="a" >
          <div className="box1 fade-in one">
            <img src={Poems} alt="poems" height="230px" width="361px" />
          </div>

          <div className="box2">
            <div>
              <h3 className="backname">Poems4Kids</h3>
              <p className="skills">Ruby on Rails + React</p>
              <button className="learn-button">Learn More</button>
            </div>
          </div>
        </div>



        <div class="b">
          <div className="box1 fade-in three">
            <img src={Veg} alt="Veg" height="230px" width="361px" />
          </div>

          <div className="box2">
            <div>
              <h3 className="backname">VegOut!</h3>
              <p className="skills">Ruby on Rails + React</p>
              <button className="learn-button">Learn More</button>
            </div>
          </div>
        </div>



        <div class="c">
          <div className="box1 fade-in one">
            <img src={Guestbook} alt="guestbook" height="230px" width="361px" />
          </div>
          <div className="box2">
            <div>
              <h3 className="backname">Guest Book</h3>
              <p className="skills">Pure JavaScript</p>
              <button className="learn-button">Learn More</button>
            </div>
          </div>

        </div>


        <div class="d">
          <div className="box1 fade-in two">
            <img src={Campy} alt="Campy" height="230px" width="361px" />
          </div>

          <div className="box2">
            <div>
              <h3 className="backname">Campy</h3>
              <p className="skills">Ruby on rails</p>
              <button className="learn-button">Learn More</button>
            </div>
          </div>

        </div>


        <div class="e">
          <div className="box1 fade-in three">
            <img src={Pet} alt="Pet" height="230px" width="361px" />
          </div>

          <div className="box2">
            <div>
              <h3 className="backname">Pet Finder</h3>
              <p className="skills">Pure Ruby</p>
              <button className="learn-button">Learn More</button>
            </div>
          </div>

        </div>

      </div >
    );
  }
}

export default Projects;
