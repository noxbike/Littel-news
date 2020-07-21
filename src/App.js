import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.css';
import Articles from './component/Articles';
import Create from './component/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='content'>
          <Route exact path='/' component={Articles} />
          <Route path='/K-pop' component={Articles} />
          <Route path='/Sport' component={Articles} />
          <Route path='/Technologie' component={Articles} />
          <Route path='/Science' component={Articles} />
          <Route path='/create' component={Create} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
