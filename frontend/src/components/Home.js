import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import sloth from './assets/sloth.gif';

const Home = () => {
  return (
    <div>
      <h1>WaitFreeDMV</h1>
      <Link to="/appointment" >link</Link>

      {/* <meta name="viewport" content="initial-scale=1"></meta>
      <div className="bruh">
        <Parallax bgImage={sloth} bgImageAlt="City skyline with moving clouds" strength={500}>
          <div className="blockaideTitle">BLOCKAIDE</div>
        </Parallax>
        <div class="aboutTextBlock">
          <b style={{text:"white"}}>Breaking through the digital blockade with BlockAide</b><br></br><br></br>
          BlockAide is a crowdfunding platform built on top of the Ethereum blockchain. BlockAide aims to democratize crowdfunding by providing...
        </div>
         
      </div> */}
      </div>
  );
};

export default Home;