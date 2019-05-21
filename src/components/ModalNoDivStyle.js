import React from 'react';

const Modal = props => {

  function displayInfo() {
    switch (props.modalInfo) {
      case 'Modal A':
        return <div className="modal-info">
          <h2 className="modal-title">Poems4Kids</h2>
          <p className="modal-desc"> Poems4Kids was created with the hope to teach young kids how to read, recoginze sight words, understand how rhyming works and to encourage writing!
              Notable Attributes include:
              <ul>
              <li>React.js to asynchronously manage state across multiple components</li>
              <li>Ruby on Rails API to route PostgreSQL database transactions to React frontend</li>
              <li>Custom routes and controller logic via Rails to return specific data from fetches</li>
              <li>Click the words in the poem to hear MDN SpeechSynthsis in action</li>
            </ul>
            Hosted on Heroku. Loading times may vary. Page refresh may be necessary.<br />
            <button className="learn-button" ><a href='https://poems4kids.herokuapp.com/' target="_blank">Try it Now</a></button>
          </p>
          <br />
        </div>
      case 'Modal B':
        return <div className="modal-info">
          <h2 className="modal-title">VegOut</h2>
          <p className="modal-desc"> VegOut was created out of my love for travel and vegan food!  A user can create a trip and then search and add restaurants to it they would like to visit.
              Notable Attributes include:
              <ul>
              <li>React.js to asynchronously manage state across multiple components</li>
              <li>Ruby on Rails API to route PostgreSQL database transactions to React frontend</li>
              <li>Custom routes and controller logic via Rails to return specific data from fetches</li><br />
              <li>Google Maps and Geocode API</li><br />
              <li>User authentication and password encryption supported with BCrypt and Json Web Tokens (JWT)</li><br />
              <li>Rails ActiveMailer</li>
            </ul>
            Hosted on Heroku. Loading times may vary. Page refresh may be necessary. Sample Login available if you would prefer not to signup: Email: test@email.com | Password: Test <br />
            <button className="learn-button" ><a href='https://veggout.herokuapp.com/' target="_blank">Try it Now</a></button>
          </p>
        </div>
      case 'Modal C':
        return <div className="modal-info">
          <h1 className="modal-title">GuestBook</h1>
          <p className="modal-desc"> GuestBook is an Instagram themed site that allows users to upload photo memories for the guest of honor. This interactive guestbook allows users to like and comment on photos.
              Notable Attributes include:
          <ul>
              <li>Single page application frontend created with JavaScript, HTML, CSS</li><br />
              <li>Fetch requests made to the backend API built with Ruby on Rails</li><br />
              <li>Bootstrap responsive framework</li><br />
            </ul>
            <button className="learn-button" ><a href='https://github.com/jesspoe/wedding_guestbook_fe' target="_blank">View the Git Repo Here</a></button>
          </p>
        </div>
      case 'Modal D':
        return <div className="modal-info">
          <h1 className="modal-title">Campy</h1>
          <p className="modal-desc"> Campy is a social community that allows users to search for recerational areas through the National Parks API.  Users can rate and leave reviews for parks they've visited.
              Notable Attributes include:
          <ul>
              <li>Created with MVC architecture using the Ruby on Rails web framework</li><br />
              <li>Embedded Google Maps</li><br />
              <li>Bcrypt Gem to secure users' passwords </li>
            </ul>
            Hosted on Heroku. Loading times may vary. Page refresh may be necessary. Sample Log in available if you would prefer not to signup: Username: Tester | Password: Test
        <br /><button className="learn-button" ><a href='https://dry-island-18834.herokuapp.com/home' target="_blank">Try it Now</a></button>
          </p>
          <br />
        </div >
      default:
        return null
    }
  }

  function closeModal(e) {
    e.stopPropagation()
    props.closeModal()
  }

  let modal = (
    <div
      className="modal"
      onClick={closeModal}>

      <div className="modal-content"
        onClick={e => e.stopPropagation()}>

        <span
          className="close"
          onClick={closeModal}>&times;
          </span>

        <div className="modal-flex">
          {displayInfo()}
        </div>

      </div>

    </div>
  )

  return (props.displayModal ? modal : null);
}

export default Modal;