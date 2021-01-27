
import './App.css';
import React from 'react'
import { render } from 'react-dom';
import { Component } from 'react';
import Welcome from './Components/Welcome';
import home from './Components/home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import AppRouter from './AppRouter';
class App extends Component {
  render(){
    return(
      <div>
        <AppRouter/>
      </div>
    )
  }
}
export default App
  
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

