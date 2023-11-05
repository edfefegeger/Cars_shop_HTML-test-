import './App.css';

import {useState} from 'react';
import SearchLabel from './components/SearchLabel';
import ListStudent from './components/ListStudent';
import Footer from './components/Footer12';
import Header from './components/Header';
import { Route, Link, Router, BrowserRouter, Routes } from 'react-router-dom';

import Routes_main from './components/Routes_main';
function App() 
{

  const [count, setCount] = useState(0);
  var autoArray = require("./data/auto.json");
  let personArray = require("./data/person.json");

  const [autoView, setAutoView] = useState(autoArray);



  function reloadList(newArray)
  {
    setAutoView(newArray);
  }

  return (
    <BrowserRouter>
    <div className='container-fluid'>
    <Header />
      <Routes>
      <Route element = {<Routes_main />} path = '*' />
      <Route element = {<ListStudent Array = {personArray}/>} path='/shopping' />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
