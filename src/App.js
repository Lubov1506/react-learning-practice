import './App.css';
import React, { Component } from 'react';
import Tree from './components/Tree';
import {UserContext} from '\./contexts'
import {PersonContext} from './contexts/Avatar';
import PersonTree from './components/PersonTree';
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        is: 1,
        firstName: 'John',
        lastName: 'Smitt',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8z3HlHdqe9YFyKQ1eYldQjeBsitM5O5hpA&usqp=CAU',
      },
      person: {
        name: 'Liliya',
        lastName: 'Sun',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8z3HlHdqe9YFyKQ1eYldQjeBsitM5O5hpA&usqp=CAU',
      }
    };
  }

  render () {
    
    return (
    <PersonContext.Provider value={this.state.person}>
      <PersonTree />
    </PersonContext.Provider>
    )
  }
}

export default App;
