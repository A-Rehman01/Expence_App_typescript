import React from 'react';
import './App.css';

//Components
import {MainBalance} from './Components/MainBalance'
import { Incomeexpencebal } from './Components/Incomeexpencebal';
import { Newtrasection } from './Components/Newtrasection';
import { Trasections } from './Components/Trasections';


//Context
import ContextProvider from './GlobalContext/Contextdata'

function App() {
  return (
    <div>
    <ContextProvider>
    <div className="MainContainer">
      <MainBalance/>
      <Incomeexpencebal/>
      <Trasections/>
      <Newtrasection/>
    </div>
     </ContextProvider>  
     </div>
  );
}

export default App;
