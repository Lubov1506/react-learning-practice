import './App.css';
import React from 'react';
import UsersLoader from './components/UsersLoader';
import WindowSizes from './components/WindowSizes';
import FlexContainer from './components/FlexContainer';
import Container from './components/Grid/Container';
import ToDoList from './components/ToDoList';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App (props) {
  return (
    <BrowserRouter>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contacts'>Contacts</Link></li>
      <li><Link to='/components/FlexContainer'>FlexContainer</Link></li>
      <li><Link to='/components/Grid/Container'>GridContainer</Link></li>
      <li><Link to='/components/ToDoList'>ToDoList</Link></li>
    </ul>
    <Routes>
     <Route path='/' element={<Home/> }/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contacts' element={<Contacts />}/>
      <Route path='/components/FlexContainer' element={<FlexContainer children={[1,23, 654]}/>}/>
      <Route path='/components/Grid/Container' element={<Container />}/>
      <Route path='/components/ToDoList' element={<ToDoList />}/>

      <Route path='*' element={<PageNotFound />}/>


    </Routes>
   
    </BrowserRouter>
  )
  
}

export default App;

const Home = () => {
  return<div>Home</div>;
}
const About = () => {
  return<div>About</div>;
}
const Contacts = () => {
  return<div>Contacts</div>;
}
const PageNotFound =() => {
  return <div> 404!!! Page not found</div>
}