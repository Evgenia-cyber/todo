import React, { useState, useEffect } from "react";
import InputAddTodo from "./components/InputAddTodo";
import TodoList from "./components/TodoList";
import Context from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
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
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <InputAddTodo onCreate={addTodo} />
        {todos.length > 0 ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <div>No todos!</div>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
