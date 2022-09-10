import styles from '../styles/Trial.module.scss'
export default function Business() {
  return (
    // These will be replaced with auth0 login
    <div className={styles.login}>
      <h1>Company Username</h1>
      <input type="text" name="username" id="username" placeholder="Username" />
      <button><h4>Submit</h4></button>
    </div>
  );
}
