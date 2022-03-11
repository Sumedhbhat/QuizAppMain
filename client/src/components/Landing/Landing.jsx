import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";
import Logo from './icon.png';
const Landing = () => {
  return (
    <div>
      <Navbar />
      <section className='hero is-large is-info'>
        <div className='columns'>
          <div className='column'>
            <div className='hero-body'>
              <p className='title'>Quiz Application</p>
              <p className='subtitle'>
                A quiz application that allows you to test your knowledge.
              </p>
            </div>
          </div>
          <div className='column centerMain'>
            <img src={Logo} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
