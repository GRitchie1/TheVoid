import React from 'react';
import spiral from './spiral.svg';
import skull from './skull.png';
import { Parallax } from "react-scroll-parallax";
import style from "./Landing.module.css";

const Landing = () => {

  return (
    <div className={style.Landing}>
      <Parallax translateY={['-600px', '1000px']} rotate={[2880, 0]} opacity={[2,0]} className={style.LandingContainer}>
      <img src={spiral} className={style.spiral} alt="logo" />
      </Parallax>
      <Parallax translateY={['-600px', '0px']} className={style.LandingTextContainer}>
      <h1 className={style.Title1}>Welcome to The Void</h1>
      <img src={skull} className={style.skull} alt="logo" />
      </Parallax>
    </div>
  );
}

export default Landing;
