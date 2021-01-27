
import './App.css';
import React from 'react'
import { render } from 'react-dom';
import { Component } from 'react';
import Welcome from './Components/Welcome';
import home from './Components/home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import homePage from './Pages/homePage';
import WelcomePage from './Pages/WelcomePage';
class AppRouter extends Component {
  render(){
    return(
      <div>
        <Router>
          <div className="App">
            <Route path="/" component={home} exact></Route>
            <Route path="/welcome" component={Welcome}></Route>
          </div>
        </Router>
      </div>
    )
  }
}
export default AppRouter;