import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className="resetList">
      {props.todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} onChange={props.onToggle} onRemove={props.onRemove}/>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired, 
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
export default TodoList;
