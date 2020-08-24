import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './common/Header/Header.js';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <div className="container">
        <Header /> 
        </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
