import { useEffect, useState } from "react";
import useStore from "./Store";

const DisplaySibling = () => {
  const [data, setData] = useState("");
  const { getStore, subscribe } = useStore();
  useEffect(() => {
    subscribe(() => setData(getStore()));
  }, []);
  return <div>{data}</div>;
};

export default DisplaySibling;
