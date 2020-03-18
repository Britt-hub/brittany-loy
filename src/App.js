import React from 'react';
import './App.css';
import Resume from './components/Resume'
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// import { SocialIcon } from 'react-social-icons';


function App() {
  return (

    <Router>
                  


      <Switch>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <div className="App">
          <Navbar /> 
            <div className="App-header">
              <Header></Header>
            </div>

            <div className='About'>
              <About></About>
            </div>
           
            <div className='contact'>
              <Contact></Contact>
            </div>

            {/* <div className='resume'>
     <Resume></Resume>
      </div> */}
          </div>
        </Route>
      </Switch>


    </Router>
  );
}

export default App;