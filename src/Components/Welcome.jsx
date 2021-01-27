import React from 'react'
import { render } from 'react-dom';
import { Component } from 'react';
import logo from '../assets/images/logo.svg'
class Welcome extends Component {
    url='https://www.bridgelabz.com/'
    constructor() {
      super()
      this.state={
        title: 'Welcome, Hello From Bridgelabz!!!',
        name: '',
        list:["Technologies","Thinkers", "Builders"]
      }
    }
    clickOnBLPage = (e) => {
      window.open(this.url);
    }
    onInputChange = (event) =>{
      const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
      this.setState({
        name:event.target.value
      })
      if(nameRegex.test(event.target.value)){
        this.setState({
          nameError:''
        })
      }
      else{
        this.setState({
          nameError:'Name is Incorrect'
        })
      }
    }

    goToHomePage = (event) => {
        this.props.history.push("/");
    }
    render() {
      return (
        <div class="welcomePage">
          <h1>Hello {this.state.name}, Welcome to Bridgelabz</h1>
          <img src={logo} onClick={this.clickOnBLPage} alt="The React logo"></img>
          <input onChange={this.onInputChange}></input>
          <span className="error-output">{this.state.nameError}</span>
          <button onClick={this.goToHomePage}>Go to Home Page</button>
          
        </div>
        
      );
    }
  }
  
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
  
  export default Welcome;
  