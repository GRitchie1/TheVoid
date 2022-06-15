import React from 'react';
import spiral from './spiral.svg';
import skull from './skull.png';
import './Landing.css';

function Landing() {
  const [isRotating, setIsRotating] = React.useState(false);
  const onRotate = () => {
    setIsRotating(true)
  };

  return (
    <div className="Landing">
      <header className="LandingContainer">
      <img src={spiral} className={`spiral ${isRotating ? 'spin' : ''}`} alt="logo" />
      <div className="LandingTextContainer">
        <h1 className="Title1">Welcome to The Void</h1>
        <img src={skull} className={`skull ${isRotating ? 'grow' : ''}`} alt="logo" />
        <button className="EnterButton" onClick={onRotate}>Click here to enter, if you dare!</button>
      </div>
      </header>
    </div>
  );
}

export default Landing;
