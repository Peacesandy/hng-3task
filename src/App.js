import './index.css';

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './layout/Main'
import Card from './layout/Card'

//React router Dom
import { Routes, Route, } from "react-router-dom";
import Card from './layout/Card';

//Rendering in App.js
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/main' element={<Card />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
