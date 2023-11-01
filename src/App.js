import './App.css';

import {useState} from 'react';
import SearchLabel from './components/SearchLabel';
import ListStudent from './components/ListStudent';
import Footer from './components/Footer12';
import Header from './components/Header';


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
    <div className='container-fluid'>
      <Header />
      <ListStudent Array={personArray}/>
      <Footer />
    </div>
  );
}

export default App;
