import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import sloth from './assets/sloth.gif';
import "./Styles.css";

const Home = () => {
  return (
    <div>
      <h1>WaitFreeDMV</h1>
      <Link to="/appointment" >link</Link>

      <meta name="viewport" content="initial-scale=1"></meta>
      <div className="bruh">
        <Parallax className="parallax" bgImage={sloth} bgImageAlt="slow dmv sloth from utopia" strength={500}>
          <div className="title">Wait Free DMV</div>
        </Parallax>
        <div>
          <b style={{text:"white"}}> Why Wait for a DMV Appointment?</b><br></br>
        </div>
         
      </div>
      </div>
  );
};

export default Home;