import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Appointment from './components/Appointment';
import { Animator, batch, ScrollContainer, ScrollPage, Sticky, Fade, MoveOut, ZoomIn, StickyIn, FadeIn } from 'react-scroll-motion'

const ZoomInScrollsOut = batch(StickyIn(), FadeIn(),ZoomIn() );
function App() {
  return (
    <>
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>

    <ScrollContainer>
      <ScrollPage page = {0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h2>WAIT FREE DMV</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page = {1}>
        <Animator animation={ZoomInScrollsOut}>
          <h2>Why Wait?</h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
    </>

  );
}
  
export default App;