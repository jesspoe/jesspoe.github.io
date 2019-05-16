import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Campy from '../image/campy.png'
import Guestbook from '../image/guestbook.png'
import Pet from '../image/pet.png'
import Poems from '../image/poems.png'
import Veg from '../image/veg.png'


class Projects extends Component {
  render() {
    return (
      <div class="wrapper">
        <header class="header">
          <Link title="Home" to="/">Home
     </Link></header>

        <div class="panel a">
          <img src={Poems} alt="Poems" /></div>


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
          <p>jesspoe00@gmail.com </p>
          <p>(321) 863-5375</p>

        </footer>
      </div>
    );
  }
}

export default Projects;
