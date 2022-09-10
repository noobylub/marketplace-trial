import styles from '../styles/Trial.module.scss'
export default function Customer() {
  return (
    <div className={styles.login}>
      <h1>Customer Username</h1>
      <input type="text" name="username" id="username" placeholder="Username" />
      <button><h4>Submit</h4></button>
    </div>
  );
}
