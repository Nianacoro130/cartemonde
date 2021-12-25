import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nofound from './pages/Nofound';
import About from './pages/About';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/a-propos' element={<About/>} />
        <Route path="*" element={<Nofound/>} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;