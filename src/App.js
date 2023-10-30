import Todo from "./components/todo";

function App() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "make dinner", completed: true },
  ];
  return (
    <div>
      {todos.map((todo) => {
        return(
          <Todo key={todo.id} todo={todo} />
        )
      })}
      <Todo />
    </div>
  );
}

export default App;
