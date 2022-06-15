import spiral from './spiral.svg';
import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles.Landing}>
      <header className={styles.LandingContainer}>
      <img src={spiral} className={styles.spiral} alt="logo" />
      <div className={styles.TextContainer}>
        <h1 className={styles.Title1}>Welcome to The Void</h1>
        <button className={styles.EnterButton} onClick={()=>{alert('hi')}}>Click here to enter, if you dare!</button>
      </div>
      </header>
    </div>
  );
}

export default Landing;
