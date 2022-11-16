import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home'
import Place from '../src/pages/Place';
import Nava from "./Nav";


function App() {
  return (
    <BrowserRouter>
        <Nava/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/places" element={<Place/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
