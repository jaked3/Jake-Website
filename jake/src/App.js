import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';



class App extends Component {

//https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app
//https://www.youtube.com/watch?v=nF9g1825mwk
  render() {
    return (
      <div>
        <Nav />

        <Router>

          <div className='App'>

          <Route path="/" exact strict render={ () => {
            return (
              <div>
            
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
