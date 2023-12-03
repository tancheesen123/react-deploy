import logo from './logo.svg';
import './App.css';
import React from 'react';
import { DatePicker } from 'antd';

function App() {
      // i wannna add <DatePicker />; but it is not working
  return (

    <div className="App">
      <DatePicker />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>TAN CHEE SEN</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>


  );
}

export default App;
