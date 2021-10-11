import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'

 function App() {
  return (
  <>
  <Router>
    <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
    </>
  );
}

export default App;