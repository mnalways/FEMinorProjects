// import "./styles.css";
import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { useLRUHook } from "./useLRUHook";

export default function App() {
  const [activetab, setActivetab] = useState("TAB1");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { getItem } = useLRUHook(3);
  const fetchData = async () => {
    setLoading(true);
    setData(null);
    await setTimeout(() => {
      setData(activetab);
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    getItem(activetab, fetchData);
  }, [activetab]);
  return (
    <div className={styles.container}>
      <div className={styles.containerTabs}>
        <div
          className={styles.tabs}
          key="1"
          onClick={() => setActivetab("TAB1")}
        >
          {"TAB1"}
        </div>
        <div className={styles.tabs} onClick={() => setActivetab("TAB2")}>
          {"TAB2"}
        </div>
        <div className={styles.tabs} onClick={() => setActivetab("TAB3")}>
          {"TAB3"}
        </div>
        <div className={styles.tabs} onClick={() => setActivetab("TAB4")}>
          {"TAB4"}
        </div>
        <div className={styles.tabs} onClick={() => setActivetab("TAB5")}>
          {"TAB5"}
        </div>
        <div className={styles.tabs} onClick={() => setActivetab("TAB6")}>
          {"TAB6"}
        </div>
      </div>
      <div>{data}</div>
      {loading && <div>loading...</div>}
    </div>
  );
}
