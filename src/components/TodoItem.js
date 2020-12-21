import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, index, onChange,onRemove }) {
  return (
    
        <li className="listItem">
        <span className={todo.completed ? "done" : ""}>
          <input
            type="checkbox"
            onChange={() => onChange(todo.id)}
            checked={todo.completed}
          />
          <strong>{++index}</strong>&nbsp;
          {todo.title}
        </span>
        <button onClick={()=>{onRemove(todo.id)}}>&times;</button>
      </li>
      
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
export default TodoItem;
