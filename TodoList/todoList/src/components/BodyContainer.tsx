import React, { useRef, useState } from "react";
import Style from "./Body.module.scss";

interface Props {
  addTodo: (title: string | null, message: string | null) => void;
}
const BodyContainer = ({ addTodo }: Props) => {
  const [editNoteVisible, setEditNoteVisible] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const noteRef = useRef<HTMLInputElement>(null);
  const createNote = () => {
    if (titleRef.current && noteRef.current) {
      addTodo(titleRef?.current?.value, noteRef?.current?.value);
      titleRef.current.value = "";
      noteRef.current.value = "";
    }
  };
  return (
    <div>
      <input
        aria-label="Title"
        onFocus={() => setEditNoteVisible(true)}
        ref={titleRef}
      ></input>
      <input
        aria-label="Take a note.."
        hidden={!editNoteVisible}
        ref={noteRef}
      ></input>
      <button onClick={createNote}></button>
    </div>
  );
};

export default BodyContainer;
