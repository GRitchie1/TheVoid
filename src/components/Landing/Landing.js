import spiral from './spiral.svg';
import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles.Landing}>
      <header className={styles.Landingheader}>
      <img src={spiral} className={styles.spiral} alt="logo" />
        <h1>Welcome to The Void</h1>
      </header>
    </div>
  );
}

export default Landing;
