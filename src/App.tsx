import React from 'react';
import './App.css';

//Components
import { MainBalance } from './Components/MainBalance'
import { Incomeexpencebal } from './Components/Incomeexpencebal';
import { Newtrasection } from './Components/Newtrasection';
import { Trasections } from './Components/Trasections';
import { Notification } from './Components/Notification'
import { Header } from './Components/Header';
import { Tag } from './Components/Tag'

//Context
import ContextProvider from './GlobalContext/Contextdata'


function App() {
  return (
    <div>
      <ContextProvider>
        <div className="MainContainer">
          <Header />
          <MainBalance />
          <Incomeexpencebal />
          <Trasections />
          <Newtrasection />
          <Notification />
          <Tag />
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;
