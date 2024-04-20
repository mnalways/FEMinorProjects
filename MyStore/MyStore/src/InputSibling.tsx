import useStore from "./Store";

const InputSibling = () => {
  //   const [input, setInput] = useState("");
  const { setStore } = useStore();
  return (
    <div>
      <input type="text" onChange={(e) => setStore(e.target.value)} />
    </div>
  );
};

export default InputSibling;
