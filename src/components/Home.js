import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faMedium, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCode } from '@fortawesome/free-solid-svg-icons';
import Resume from '../resume/Resume.pdf';
library.add(faGithub, faUser, faMedium, faCode, faLinkedinIn);


class Home extends Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <ul>
            <h2 className="name">Jessica Poe</h2>
            <li>
              <a href={Resume} target="_blank"><FontAwesomeIcon className="icons" size="6x" icon={['fas', 'user']} /></a>
              <p>Resume</p>
            </li>

            <li>
              <a title="Github" target="_blank" href="https://github.com/jesspoe">
                <FontAwesomeIcon className="icons" size="6x" icon={['fab', 'github']} />
                <p>Github</p>
              </a>
            </li>
            <li>
              <a title="My Blog" target="_blank" href="https://medium.com/@jesspoe00">
                <FontAwesomeIcon className="icons" size="6x" icon={['fab', 'medium']} />
                <p>Blog</p>
              </a>
            </li>
            <li>
              <a title="LinkedIn" target="_blank" href="https://linkedin.com/in/poejessica/">
                <FontAwesomeIcon className="icons" size="6x" icon={['fab', 'linkedin-in']} />
                <p>LinkedIn</p>
              </a>
            </li>
            <li>
              <Link title="Projects" to="/projects/">
                <FontAwesomeIcon className="icons" size="6x" icon={['fas', 'code']} />
                <p>Projects</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
