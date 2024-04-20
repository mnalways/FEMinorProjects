import React from "react";
import Style from "./boxContainer.module.scss";
import { Todo } from "./todoContainer";

interface Props {
  todos: Todo[];
  removeTodos: (note: Todo) => void;
}
const BoxContainer = ({ todos, removeTodos }: Props) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <div>{todo.title}</div>
            <div>{todo.message}</div>
            <button onClick={() => removeTodos(todo)}>remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default BoxContainer;
