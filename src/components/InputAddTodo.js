import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    inputObjectFromUseInputValue: {
      value: value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function InputAddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" placeholder="Enter new todo" {...input.inputObjectFromUseInputValue} />
      <button type="submit">Add todo</button>
    </form>
  );
}
InputAddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default InputAddTodo;
