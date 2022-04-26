import React, {useState, useContext} from 'react';
import Tracker from '../Tracker';
import Clicker from '../Clicker';
import Stopwatch from '../Stopwatch';
import { UserContext } from '../../contexts';


const Home = () => {
 const userValue = useContext(UserContext)
  return (
    <div>
         <h1>{userValue.name}</h1>
    </div>
  );
};

export default Home;
