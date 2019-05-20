import React from 'react';

const Modal = props => {

  function displayInfo() {
    switch (props.modalInfo) {
      case 'Modal A':
        return <div className="modal-info">
          <h2>Poems4Kids</h2>
          <p> Poems4Kids was created with the hope to teach young kids how to read, recoginze sight words, understand how rhyming works and encourage writing!
              Notable Attributes include:
              <ul>
              <li>React.js to asynchronously manage state across multiple components</li>
              <li> Ruby on Rails API to route PostgreSQL database transactions to React frontend</li>
              <li>Custom routes and controller logic via Rails to return specific data from fetches</li>
            </ul></p>
          Hosted on Heroku. Loading times may vary. Page refresh may be necessary. Sample Log in available if you would prefer not to signup: Email: test@email.com | Password: Test
          <br />
          <button className="learn-button" ><a href='https://poems4kids.herokuapp.com/' target="_blank">Try it Now</a></button>

        </div>
      case 'Modal B':
        return <div className="modal-info">This is Modal B</div>
      case 'Modal C':
        return <div className="modal-info">This is Modal C</div>
      case 'Modal D':
        return <div className="modal-info">
          <h1>Campy</h1>
          <p> Poems4Kids was created with the hope to teach young kids how to read, recoginze sight words, understand how rhyming works and encourage writing!
              Notable Attributes include:
              <ul>
              <li>React.js to asynchronously manage state across multiple components</li>
              <li> Ruby on Rails API to route PostgreSQL database transactions to React frontend</li>
              <li>Custom routes and controller logic via Rails to return specific data from fetches</li>
            </ul></p>

          Hosted on Heroku. Loading times may vary. Page refresh may be necessary. Sample Log in available if you would prefer not to signup: Username: Tester | Password: Test
    <br />
          <button className="learn-button" ><a href='https://dry-island-18834.herokuapp.com/home' target="_blank">Try it Now</a></button>


        </div >
      case 'Modal E':
        return <div className="modal-info">This is Modal E</div>
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