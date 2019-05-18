import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Campy from '../image/campy.png'
import Guestbook from '../image/guestbook.png'
import Pet from '../image/pet.png'
import Veg from '../image/veg.png'
import ReactCardFlip from 'react-card-flip';
import Poems from '../image/poems.png'





class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div class="wrapper">
        <header class="header">
          <ul>
            <li><Link title="Home" to="/"><h3>Home</h3>
            </Link></li>
          </ul>
        </header>

        <div class="panel a" >
          <ReactCardFlip isFlipped={this.state.isFlipped} flipSpeedFrontToBack=".9" flipDirection="horizontal">
            <div className="project-card" key="front" onClick={this.handleClick}>
              <img src={Poems} alt="Poems" height="400px" width="500px" />
            </div>

            <div key="back" className="back">
              <h3 align="center">Poems4Kids</h3>
              <p>A web app created to assist kids in learning how to read by recognizing sight words. Users also have an opportunity to develop
                writing and rhyming skills. Click the words in the poem to hear them! </p>
              <p className="card-link"><a href="https://poems4kids.herokuapp.com/" target="blank">Poems4Kids on Heroku!</a></p>
              <button className="flip-button" onClick={this.handleClick}>Flip Back</button>
            </div>
          </ReactCardFlip>
        </div>



        <div class="panel b">
          <div className="box1">
            <img src={Veg} alt="Veg" height="400px" width="500px" />
          </div>

          <div className="box2">
            <div>
              <h3>VegOut!</h3>
              <p>Ruby on Rails + React</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>



        <div class="panel c">
          <img src={Guestbook} alt="guestbook" height="400px" width="500px" /></div>

        <div class="panel d">
          <img src={Campy} alt="Campy" height="400px" width="500px" />

        </div>


        <div class="panel e">
          <img src={Pet} alt="Pet" height="400px" width="500px" /></div>


        <footer class="footer">
          <a href="mailto: jesspoe00@gmail.com" className="color-link" >Contact Me</a>


        </footer>
      </div>
    );
  }
}

export default Projects;
