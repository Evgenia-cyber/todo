import React, { useState, useEffect } from "react";
import InputAddTodo from "./components/InputAddTodo";
import TodoList from "./components/TodoList";
import Preloader from "./Loader";
import Modal from "./Modal/Modal";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(text) {
    const oldId = todos[todos.length - 1].id;
    setTodos([...todos, { id: oldId + 1, completed: false, title: text }]);
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <Modal />
      <InputAddTodo onCreate={addTodo} />
      {loading && <Preloader />}
      {todos.length > 0 ? (
        <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
      ) : loading ? null : (
        <div>No todos!</div>
      )}
    </div>
  );
}

export default App;
