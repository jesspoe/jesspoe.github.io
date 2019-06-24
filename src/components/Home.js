import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faMedium, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCode } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import Resume from './Resume.pdf'
library.add(faGithub, faUser, faMedium, faCode, faLinkedinIn, faFilePdf);


class Home extends Component {
  render() {
    return (
      <div className="nav-container">
        <h2 className="name">Jessica Poe</h2>
        <h4 classname="title">Full Stack Developer</h4>
        <div className='bar'></div>
        <ul >
          <li className="home-icons">
            <a title="Github" target="_blank" rel="noopener" href="https://github.com/jesspoe">
              <FontAwesomeIcon className="icons" size="6x" icon={['fab', 'github']} />
              <p>Github</p>
            </a>
          </li>
          <li className="home-icons">
            <a title="My Blog" target="_blank" rel="noopener" href="https://medium.com/@jesspoe00">
              <FontAwesomeIcon className="icons" size="6x" icon={['fab', 'medium']} />
              <p>Blog</p>
            </a>
          </li>
          <li className="home-icons">
            <a title="LinkedIn" target="_blank" rel="noopener" href="https://linkedin.com/in/poejessica/">
              <FontAwesomeIcon className="icons" size="6x" icon={['fab', 'linkedin-in']} />
              <p>LinkedIn</p>
            </a>
          </li>
          <li className="home-icons">
            <a title="Resume" target="_blank" href={Resume}>
              <FontAwesomeIcon className="icons" size="6x" icon={['far', 'file-pdf']} />
              <p>Resume</p>
            </a>
          </li>

          <li className="home-icons">
            <Link title="Portfolio" to="/portfolio">
              <FontAwesomeIcon className="icons" size="6x" icon={['fas', 'code']} />
              <p>Portfolio</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;

