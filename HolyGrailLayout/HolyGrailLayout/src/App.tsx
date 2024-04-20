import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>Head</div>
      <div className={styles.body}>
        <div className={styles.left}>Left</div>
        <div className={styles.main}>main</div>
        <div className={styles.right}>Right</div>
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}

export default App;
