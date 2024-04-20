import React, { useState } from "react";
import Style from "./todo.module.scss";
import BodyContainer from "./BodyContainer";
import BoxContainer from "./BoxContainer";

export interface Todo {
  id: number;
  title: string | null;
  message: string | null;
}

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(0);

  const addTodo = (title: string | null, message: string | null) => {
    setTodos([...todos, { id: nextId, title, message }]);
    setNextId((prev) => prev + 1);
  };
  const removeNote = (note: Todo) => {
    const removedTodos = todos.filter((item) => item.id != note.id);
    setTodos(removedTodos);
  };
  return (
    <div>
      <BodyContainer addTodo={addTodo} />
      <BoxContainer todos={todos} removeTodos={removeNote} />
    </div>
  );
};

export default TodoContainer;
