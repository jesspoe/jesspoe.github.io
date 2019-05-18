import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from './components/Projects'
import Home from './components/Home'
import About from './components/About'



import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects/" exact component={Projects} />
      </Router>

    );
  }
}

export default App