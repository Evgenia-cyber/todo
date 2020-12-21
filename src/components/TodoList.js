import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className="resetList">
      {props.todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} onChange={props.onToggle}/>
      ))}
    </ul>
  );
}
//добавляем валидацию для props, используя библиотеку "prop-types"
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired, //todos-это массив из объектов. isRequired - это обязательный props для работы компонента
  onToggle: PropTypes.func.isRequired
};
export default TodoList;
