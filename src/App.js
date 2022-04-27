import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Home from './components/Home';
import Stopwatch from './components/Stopwatch';
import {UserContext, ThemeContext} from './contexts';
import CONSTANTS from './constants';
//import Home from './components/Home';
import Tree from './components/Tree';
const { THEMES } = CONSTANTS;

const App = () => {
  const [theme, setTheme] = useState(THEMES.DARK);
  return (
    <div>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Tree />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;


