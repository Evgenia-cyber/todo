import React, { useState } from "react";
import PropTypes from "prop-types";

function InputAddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }
  
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter new todo"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}
InputAddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default InputAddTodo;
