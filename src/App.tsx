import React from 'react';
import './App.css';

//Components
import {MainBalance} from './Components/MainBalance'
import { Incomeexpencebal } from './Components/Incomeexpencebal';
import { Newtrasection } from './Components/Newtrasection';
import { Trasections } from './Components/Trasections';

function App() {
  return (
    <div className="MainContainer">
      <MainBalance/>
      <Incomeexpencebal/>
      <Trasections/>
      <Newtrasection/>
    </div>
  );
}

export default App;
