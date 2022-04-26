import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Home from './components/Home';
import Stopwatch from './components/Stopwatch';
import {UserContext} from './contexts';

const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Snow'
  })
  return(
      <>
      <UserContext.Provider value={user}>
        <Home/>
      </UserContext.Provider>

      </>
    );
  
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

