import React from "react";

const Todo = ({ todo }) => {
  if (!todo) {
    return <div>No todo provided</div>;
  }

  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>
  const text = completed ? <strike>{h1}</strike>: h1;

  return (
    <div data-testid={`todo-${id}`}>
      <div>{text}</div>
    </div>
  );
};

export default Todo;
