import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

class App extends Component {


  render() {
    return (
      <div>
        <Nav />

        <Router>

          <div className='App'>

          <Route path="/" exact strict render={ () => {
            return (
              <div>
                <Particles className='particles' 
                params={particlesOptions}
              />

              <Home /> 
              </div>


              );
          } }/>

          <Route path="/About/" exact strict render={ () => {
            return (<About />);
          }

          }/>
          </div>

        </Router>
      
      </div>
       
    );
  }
}


export default App;
