import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Campy from '../image/campy.png'
import Guestbook from '../image/guestbook.png'
import Veg from '../image/veg.png'
import Poems from '../image/poems.png'
import Resume from '../resume/Resume.pdf';
import Modal from './ModalNoDivStyle'


class Projects extends Component {
  state = {
    modal: false,
    modalInfo: "",
  }

  selectModal = (info = "") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info
    })
  }


  render() {
    return (
      <div className="wrapper">
        <header className="about-header">
          <Menu>
            <a className="menu-item" href="/">
              Home
      </a>

            <a className="menu-item" href="/about">
              About
      </a>

            <a className="menu-item" href={Resume} target="_blank">
              Resume
      </a>


          </Menu>
        </header>
        <h1 align='center' className="pro-name">Portfolio</h1>
        <div className="a" >
          <div className="box1 fade-in one">
            <img src={Poems} alt="poems" />
          </div>

          <div className="box2">
            <h3 className="backname">Poems4Kids</h3>
            <p className="skills">Rails + React</p>
            <button onClick={() => this.selectModal('Modal A')} className="learn-button">Learn More</button>
          </div>
        </div>



        <div className="b">
          <div className="box1 fade-in three">
            <img src={Veg} alt="Veg" />
          </div>

          <div className="box2">

            <h3 className="backname">VegOut!</h3>
            <p className="skills">Rails + React</p>
            <button onClick={() => this.selectModal('Modal B')} className="learn-button">Learn More</button>

          </div>
        </div>



        <div className="c">
          <div className="box1 fade-in one">
            <img src={Guestbook} alt="guestbook" />
          </div>
          <div className="box2">

            <h3 className="backname">Guest Book</h3>
            <p className="skills">Pure JavaScript</p>
            <button onClick={() => this.selectModal('Modal C')} className="learn-button">Learn More</button>

          </div>

        </div>


        <div className="d">
          <div className="box1 fade-in two">
            <img src={Campy} alt="Campy" />
          </div>

          <div className="box2">

            <h3 className="backname">Campy</h3>
            <p className="skills">Ruby on Rails</p>
            <button onClick={() => this.selectModal('Modal D')} className="learn-button">Learn More</button>

          </div>

        </div>

        <Modal
          displayModal={this.state.modal}
          modalInfo={this.state.modalInfo}
          closeModal={this.selectModal} />

        <div className="wrapper-footer">
          <footer className="footer-distributed">

            <div className="footer-left">

              <p className="footer-links">
                <a href="mailto:jesspoe00@gmail.com">Jesspoe00@gmail.com</a>
                <p>Seattle, WA 98103</p>
                <p>321-863-5375</p>
              </p>
            </div>
            <p className="footer-right">Jessica Poe &copy; 2019</p>
          </footer>
        </div>
      </div>

    );
  }
}

export default Projects;
