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
          <Link title="Home" to="/"><h3>Home</h3>
          </Link></header>

        <div class="panel a" >
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <frontPoem key="front" onClick={this.handleClick}>
              <img src={Poems} alt="Poems" />
            </frontPoem>

            <backPoem key="back">
              <a href="https://poems4kids.herokuapp.com/">Try Poems4Kids Here!</a>
              <button onClick={this.handleClick}>Flip Back</button>
            </backPoem>
          </ReactCardFlip>
        </div>



        <div class="panel b">
          <img src={Veg} alt="Veg" /></div>


        <div class="panel c">
          <img src={Guestbook} alt="guestbook" /></div>

        <div class="panel d">
          <img src={Campy} alt="Campy" />

        </div>


        <div class="panel e">
          <img src={Pet} alt="Pet" /></div>


        <footer class="footer">
          <h3>Email: jesspoe00@gmail.com </h3>


        </footer>
      </div>
    );
  }
}

export default Projects;
