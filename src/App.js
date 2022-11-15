import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home'
import Placetostay from '../src/pages/Place';


function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/places' element={<Placetostay/>} />
        Placetostay
      </Routes>
    </div>
  );
}

export default App;
