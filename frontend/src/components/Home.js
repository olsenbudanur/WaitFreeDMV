import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import sloth from './assets/sloth.gif';
import "./Styles.css";
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div>
        <Parallax className="parallax" bgImage={sloth} bgImageAlt="slow dmv sloth from utopia" strength={500}>
          <div className="title">Wait Free DMV</div>
        </Parallax>
        
        <div className="home-text">
          <b> Why wait for an DMV appointment? Schedule now and save time!</b>
        </div>
        <div className="home-text">
          <Button variant="contained" href="/appointment"
             size='large'>
            One-Click Schedule</Button>
        </div>

        <div className='home-text'>
          <b>What is Wait Free DMV?</b>

        </div>
      
      </div>
  );
};

export default Home;