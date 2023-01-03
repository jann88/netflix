import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
   <>
   <Navbar/>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
