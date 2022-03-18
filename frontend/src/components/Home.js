import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import sloth from './assets/sloth.gif';
import "./Styles.css";
import Button from '@mui/material/Button';
import { Animator, batch, ScrollContainer, ScrollPage, Sticky, Fade, MoveOut, ZoomIn, StickyIn, FadeIn } from 'react-scroll-motion'
import Typewriter from 'typewriter-effect';

const ZoomInScrollsOut = batch(StickyIn(), FadeIn(),ZoomIn() );
const Home = () => {
  return (
    
    <div>
        <ScrollContainer>
          <ScrollPage page = {0}>
          <Parallax className="parallax" bgImage={sloth} bgImageAlt="slow dmv sloth from utopia" strength={500}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <div className="title">
            <Typewriter 
              onInit = {(typewriter => {
                typewriter.typeString("Tired  of waiting?").pauseFor(1500).deleteAll().typeString("Wait Free DMV").start();
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
              <h2>What is Wait Free DMV?</h2>
            </Animator>
          </ScrollPage>
        </ScrollContainer>

      
      </div>
  );
};

export default Home;