import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './components/Home';
  
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div> 
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}
  
export default App;