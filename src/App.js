import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import auQpForm from './QPForm';
import aieeeParser from './aieeeParser/aieeeQuestionParser'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h2>Parsers</h2>
        <ul>
            <li><Link to="/aieeeParser">AIEEE Parser</Link></li>
            <li><Link to="/auQpForm">Au Form</Link></li>
        </ul>
        <Route path='/aieeeParser' component={aieeeParser}/>
        <Route path='/auQpForm' component={auQpForm}/>
      </div>
      </Router>
    );
  }
}

export default App;
