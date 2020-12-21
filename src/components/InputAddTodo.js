import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
   const [value, setValue] = useState(defaultValue);
   return {
     value: value,
     onChange: (event) => setValue(event.target.value),
   };
 }

function InputAddTodo({ onCreate }) {
  let input=useInputValue('');

  function submitHandler(event) {
    event.preventDefault();
    if (input.value.trim()) {
      onCreate(input.value);
      input='';
    }
  }
  
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter new todo"
       {...input}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}
InputAddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default InputAddTodo;
