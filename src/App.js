import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Education from './components/pages/Education';
import TechnicalSkills from './components/pages/TechnicalSkills';
import WorkExperience from './components/pages/WorkExperience';

function App() {
  return (
    <>    
     <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/education' component={Education} />
        <Route path='/technical-skills' component={TechnicalSkills} />
        <Route path='/work-experience' component={WorkExperience} />
      </Switch>
      </Router>
   </>
   
  );
}

export default App;
