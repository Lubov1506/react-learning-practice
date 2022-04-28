import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Home from './components/Home';
import Stopwatch from './components/Stopwatch';
import {UserContext, ThemeContext} from './contexts';
import CONSTANTS from './constants';
//import Home from './components/Home';
import Tree from './components/Tree';
import Loader from './components/Loader';
import CustomClicker from './components/Clicker/CustomClicker';
import SignUpPage from './pages/SignUpPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
const { THEMES } = CONSTANTS;

const App = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  return (
    <div>
      <SignUpPage/>
    </div>
  );
};

export default App;


