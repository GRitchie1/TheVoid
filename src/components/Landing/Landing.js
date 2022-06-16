import React from 'react';
import spiral from './spiral.svg';
import skull from './skull.png';
import { Parallax } from "react-scroll-parallax";
import style from "./Landing.module.css";

const Landing = () => {

  return (
    <div className={style.Landing}>
      <Parallax rotate={[0, -2880]} className={style.LandingContainer}>
      <img src={spiral} className={style.spiral} alt="logo" />
      </Parallax>
      <Parallax className={style.LandingTextContainer}>
      <h1 className={style.Title1}>Welcome to The Void</h1>
      <img src={skull} className={style.skull} alt="logo" />
      </Parallax>
    </div>
  );
}

export default Landing;
