import React, { useState } from "react";
import InputAddTodo from "./components/InputAddTodo";
import TodoList from "./components/TodoList";
import Context from "./context";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "do samthing 1" },
    { id: 2, completed: true, title: "do samthing 2" },
    { id: 3, completed: false, title: "do samthing 3" },
  ]);

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
