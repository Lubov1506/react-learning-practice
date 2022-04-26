import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Home from './components/Home';
import Stopwatch from './components/Stopwatch';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return(
      <>
<Stopwatch/>
      </>
    );
  }
}

export default App;



const Example = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title= `Вы нажали  ${count} раз`
  });
  return (
    <div>
      <p>Вы нажали на кнопку {count} раз</p>
      <button onClick={()=>setCount(count+1)}>Нажми на меня</button>
    </div>
  );
}

