import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import sloth from './assets/sloth.gif';
import "./Styles.css";
import Button from '@mui/material/Button';
import { Animator, batch, ScrollContainer, ScrollPage, Sticky, Fade, MoveOut, ZoomIn, StickyIn, FadeIn } from 'react-scroll-motion'
import Typewriter from 'typewriter-effect';

const ZoomInScrollsOut = batch(StickyIn(), FadeIn(),ZoomIn() );
const Home = () => {
  const [state, setState] = useState('');
    
  const handler = (event) => {
      // changing the state to the name of the key
    // which is pressed
    setState(true);
  };
  return (
    <div>
        <ScrollContainer>
          <ScrollPage page = {0}>
          <Parallax className="parallax" bgImage={sloth} bgImageAlt="slow dmv sloth from utopia" strength={500}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <div className="title">
            <Typewriter 
              onInit = {(typewriter => {
                typewriter.typeString("Tired of waiting?").pauseFor(1500).deleteAll().typeString("WaitFree DMV").start();
              })}
            /></div>
             {/* <div className="title">Wait Free DMV</div> */}
          </Animator>
          </Parallax>
          <div className="home-text">
          <b> Why wait for an DMV appointment? Schedule now and save time!</b>
          </div>
          <div className="home-text">
          <Button variant="contained" href="/appointment" id ="apptbtn"
             size='large' style={{zIndex:'10'}}>
            One-Click Schedule
          </Button>
          </div>
          </ScrollPage>

          <ScrollPage page = {1} style={{zIndex:'1'}}>
            <Animator animation={ZoomInScrollsOut}>
              <h2 className="h2txt">What is WaitFree DMV?</h2>
            </Animator>
            {/* <p className="center">
              Press any keys to continue
            </p> */}
            <div className="center"><Typewriter 
              onInit = {(typewriter => {
                typewriter.typeString("WaitFreeDMV allows you to save time scrolling through DMV webpage and book your appointment faster!").pauseFor(5000).start();
              })}
            /></div>
          </ScrollPage>
        </ScrollContainer>

      
      </div>
  );
};

export default Home;