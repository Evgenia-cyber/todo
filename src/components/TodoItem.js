import React,{useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
  const {removeTodo}=useContext(Context);
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
        <button onClick={()=>{removeTodo(todo.id)}}>&times;</button>
      </li>
      
  );
}
//добавляем валидацию для props, используя библиотеку "prop-types"
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
