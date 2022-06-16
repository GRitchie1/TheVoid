import React from 'react';
import { Parallax } from "react-scroll-parallax";
import style from "./Main.module.css";

const Main = () => {

  return (
    <div className={style.Main}>
      <Parallax opacity={[-1,10]} className={style.ParallaxContainer}>
      <h1 className={style.Title}>Welcome to The Void</h1>
      </Parallax>
      <div className={style.MainBody}>
        
      </div>
    </div>
  );
}

export default Main;
