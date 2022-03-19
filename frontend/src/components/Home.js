import React, { useState } from 'react';
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
            <Parallax 
              className="parallax" 
              bgImage={sloth} 
              bgImageAlt="slow dmv sloth from zootopia" 
              strength={500}>

              <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                <div className="title">
                  <Typewriter 
                    onInit = {(typewriter => {
                      typewriter.
                      typeString("Tired of waiting?").
                      pauseFor(1500).
                      deleteAll().
                      typeString("WaitFree DMV!").
                      start();
                    })}
                  />
                </div>
              </Animator>
            </Parallax>
            <div className="home-text" style={{paddingTop:'20px'}}>
              <b>Save time and alert me when an appointment is available!</b>
            </div>
              <div className="home-text" >
                <Button variant="contained" href="/appointment" id ="apptbtn"
                  style={{zIndex:'10', width:'500px', 
                        height:'120px', fontSize:'40px'}}>
                  Get text alert
                </Button>
              </div>
          </ScrollPage>

          <ScrollPage page = {1} style={{zIndex:'1'}}>
            <Animator animation={ZoomInScrollsOut}>
              <h2 className="h2txt">What is WaitFree DMV?</h2>
            </Animator>
            <div className="center" style={{position: 'absolute', bottom: 300}}>
              What is WaitFree DMV!?
              Have you ever had to get a DMV appointment ASAP, 
              only to realize the soonest time slot is 3 months away? 
              Well, WaitFree DMV! is here to help you out! 
              Just send us the latest time you’d like your appointment, 
              and your phone number. 
              We will constantly scrape your DMV’s website for you, 
              and send you an SMS reminder if any appointments become available 
              within your desired time frame!
            </div>
          </ScrollPage>

        </ScrollContainer>
      
      </div>
  );
};

export default Home;
