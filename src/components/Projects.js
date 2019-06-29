import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Projects extends Component {


  render() {
    return (
      <div className="wrapper">
        <header className="about-header">
          <Menu>
            <a className="menu-item" href="/">
              Home
      </a>
          </Menu>

        </header>

        <h1 align='center' className="pro-name">Portfolio</h1>

        <div className="a">
          <Card className="box2">
            <Card.Header as="h1"> Poems4Kids</Card.Header>
            <Card.Body>
              <Card.Title as="h3">React + Rails</Card.Title>
              <Card.Text>

                <p className="modal-desc"> Poems4Kids was created with the hope to teach young kids how to read, recoginze sight words, understand how rhyming works and to encourage writing! </p>
                <p>Notable Attributes include:</p>
                <ul>
                  <li>React.js to asynchronously manage state across components</li><br />
                  <li>Ruby on Rails API to route PostgreSQL database transactions to React frontend</li><br />
                  <li>Custom routes and controller logic via Rails</li><br />
                  <li>Click the words in the poem to hear MDN SpeechSynthsis in action</li>
                </ul>
                Hosted on free Heroku server and may require a page refresh to wake up. Username: Jessica offers a display of full functionality.<br />
                <Button className="learn-button" ><a href='https://poems4kids.herokuapp.com/' target="_blank">Try it Now</a></Button>


              </Card.Text>
            </Card.Body>
          </Card>
        </div>


        <div className="b">
          <Card className="box2">
            <Card.Header as="h1">VegOut!</Card.Header>
            <Card.Body>
              <Card.Title as="h3">React + Rails</Card.Title>
              <Card.Text>
                <p className="modal-desc"> VegOut was created out of my love for travel and vegan food!  A user can create a trip and then search and add restaurants to it they would like to visit.
                  <p>  Notable Attributes include:</p>
                  <ul>
                    <li>React.js to asynchronously manage state across components</li><br />
                    <li>Ruby on Rails API to route PostgreSQL database transactions to React frontend</li><br />
                    <li>Custom routes and controller logic via Rails</li><br />
                    <li>Google Maps and Geocode API</li><br />
                    <li>User authentication and password encryption supported with BCrypt and Json Web Tokens (JWT)</li><br />
                  </ul>
                  Hosted on free Heroku server and may require a page refresh to wake up. Sample Login available if you would prefer not to signup: Email: test@email.com | Password: test <br />
                  <Button className="learn-button" ><a href='https://veggout.herokuapp.com/' target="_blank">Try it Now</a></Button>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      

        <div className="c">
          <Card className="box2">
            <Card.Header as="h1">Guest Book</Card.Header>
            <Card.Body>
              <Card.Title as="h3">Pure JavaScript</Card.Title>
              <Card.Text>
                <p className="modal-desc"> GuestBook is an Instagram themed site that allows users to upload photo memories for the guest of honor. This interactive guestbook allows users to like and comment on photos.
                  <p> Notable Attributes include:</p>
                  <ul>
                    <li>Single page application frontend created with JavaScript, HTML, CSS</li><br />
                    <li>Fetch requests made to the backend API built with Ruby on Rails</li><br />
                    <li>Bootstrap responsive framework</li><br />
                  </ul>
                  <Button className="learn-button" ><a href='https://github.com/jesspoe/wedding_guestbook_fe' target="_blank">View the Git Repo Here</a></Button>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>


        <div className="d">
          <Card className="box2">
            <Card.Header as="h1">Campy</Card.Header>
            <Card.Body>
              <Card.Title as="h3">Ruby on Rails</Card.Title>
              <Card.Text>
                <p className="modal-desc"> Campy is a social community that allows users to search for recerational areas through the National Parks API.  Users can rate and leave reviews for parks they've visited.
              <p> Notable Attributes include:</p>
                  <ul>
                    <li>Created with MVC architecture using the Ruby on Rails web framework</li><br />
                    <li>Embedded Google Maps</li><br />
                    <li>Bcrypt Gem to secure users' passwords </li>
                  </ul>
                  Hosted on free Heroku server and may require a page refresh to wake up. Sample Log in available if you would prefer not to signup: Username: Tester | Password: Test
        <br />  <Button className="learn-button" ><a href='https://dry-island-18834.herokuapp.com/home' target="_blank">Try it Now</a></Button>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>


      </div >

    );
  }
}

export default Projects;
