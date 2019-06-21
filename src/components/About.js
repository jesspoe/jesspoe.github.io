import React from 'react';
import Resume from '../resume/Resume.pdf';
import Jessica from '../image/headshot2.jpg'
import { slide as Menu } from 'react-burger-menu';




const About = () => {
  return (
    <div className="about-wrapper">

      <header class="about-header">
        <Menu>
          <a className="menu-item" href="/">
            Home</a>

          <a className="menu-item" href="/portfolio">
            Portfolio</a>

          <a className="menu-item" href={Resume} target="_blank">
            Resume</a>


        </Menu>
      </header>

      <div className="photo">
        <img className="photo-img" src={Jessica} alt="Jessica" height="400px" width="500px" />
      </div>

      <div className="about-me">
        <h1 className="about"> About</h1>
        <div className="bio-text">
          <p>I'm Jessica and I currently live in Seattle.</p>
          <p>I didn’t always call Seattle home and I wasn’t always sure what I wanted to do in life.  I made an epic road trip to get here from the Space Coast of Florida.  Upon arriving, I got my first taste of working in the tech industry and started fine-tuning my developer skills ever since.</p>
          <p>I enjoy solving logic puzzles for fun and pride myself on being a dynamic and detail-oriented Web Developer with a knack for conceptualizing and delivering elegant, user-friendly solutions effectively and efficiently.  </p>
          <p>I love meeting new people and regularly attend meetups in the area.  I also enjoy sharing my experience of changing careers as well as what it was like to go to a bootcamp.</p>
          <p>If you think we can create something together or would like to connect <a href="mailto: jesspoe00@gmail.com" className="color-link" >drop me an email!</a></p>
        </div>
      </div>


    </div>


  )
}

export default About;
