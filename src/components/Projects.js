import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Campy from '../image/campy.png'
import Guestbook from '../image/guestbook.png'
import Pet from '../image/pet.png'
import Veg from '../image/veg.png'
import Poems from '../image/poems.png'


class Projects extends Component {

  render() {
    return (
      <div class="wrapper">
        <header class="header">
          <div className="phome">
            <Link title="Home" to="/"><h3>Home</h3></Link>

          </div>
        </header>
        <h1 align='center' className="pro-name">Projects</h1>
        <div class="a" >
          <div className="box1 fade-in one">
            <img src={Poems} alt="poems" height="250px" width="381px" />
          </div>

          <div className="box2">
            <div>
              <h3>Poems4Kids</h3>
              <p className="skills">Ruby on Rails + React</p>
              <button className="learn-button">Learn More</button>
            </div>
          </div>
        </div>



        <div class="b">
          <div className="box1 fade-in three">
            <img src={Veg} alt="Veg" height="250px" width="381px" />
          </div>

          <div className="box2">
            <div>
              <h3>VegOut!</h3>
              <p>Ruby on Rails + React</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>



        <div class="c">
          <div className="box1 fade-in one">
            <img src={Guestbook} alt="guestbook" height="250px" width="381px" />
          </div>
          <div className="box2">
            <div>
              <h3>Guest Book</h3>
              <p>Pure JavaScript</p>
              <button>Learn More</button>
            </div>
          </div>

        </div>


        <div class="d">
          <div className="box1 fade-in two">
            <img src={Campy} alt="Campy" height="250px" width="381px" />
          </div>

          <div className="box2">
            <div>
              <h3>Campy</h3>
              <p>Ruby on rails</p>
              <button>Learn More</button>
            </div>
          </div>

        </div>


        <div class="e">
          <div className="box1 fade-in three">
            <img src={Pet} alt="Pet" height="250px" width="381px" />
          </div>

          <div className="box2">
            <div>
              <h3>Pet Finder</h3>
              <p>Ruby</p>
              <button>Learn More</button>
            </div>
          </div>

        </div>


        <footer class="footer">
          <a href="mailto: jesspoe00@gmail.com" className="color-link" >Contact Me</a>
        </footer>

      </div>
    );
  }
}

export default Projects;
