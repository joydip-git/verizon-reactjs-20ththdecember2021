import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './Welcome';

function App() {
  const invoke = (txtData: string) => {
    console.log(txtData);
  }
  let message = 'welcome to react'
  return (
    <div className="App">
      <Welcome message={message} invokeHandler={invoke} />
      <br />
      <br />
      <Welcome message={message} invokeHandler={invoke} />
    </div>
  );
}

export default App;
