import { useEffect, useRef, useState } from "react";

export const useLRUHook = ({ storageSize }) => {
  const [hash, setHash] = useState(new Map());
  const [start, setStart] = useState(null);
  // const [last, setLast] = useState(null);
  const lastRef = useRef(null);
  useEffect(() => {
    const begin = {
      data: null,
      next: null,
      previous: null,
    };
    setStart(begin);
    let a = begin,
      b = null;
    for (let i = 0; i < storageSize - 1; i++) {
      b = {
        data: null,
        previous: a,
        next: null,
      };
      a.next = b;
      a = b;
    }
    console.log("hi");
    // setLast(a);
    lastRef.current = a;
  }, []);

  const shiftNodeToFirst = (key) => {
    const node = hash.get(key);
    node.previous.next = node.next;
    node.next.previous = node.previous;
    node.next = start;
    start.previous = node;
    setStart(node);
  };
  const getItem = async (key, callback) => {
    console.log("hash", hash);
    if (hash.has(key)) {
      console.log("key", key);
      shiftNodeToFirst(key);
      return hash.get(key)?.data;
    } else {
      const data = await callback();
      const node = {
        data: data,
        previous: null,
        next: start,
      };
      start.previous = node;
      setStart(node);
      // let lastClone = {...last};
      lastRef.current.previous.next = null;
      // setLast(lastRef.current?.previous);
      lastRef.current = lastRef.current?.previous;
      hash.set(key, node);
      return data;
    }
  };
  return { getItem: getItem };
};
