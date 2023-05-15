import React from 'react';

const Todo = ({ todo, id, handleDelete, handleComplete }) => {
    
  const handleCheckboxChange = () => {
    handleComplete(id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <span>{todo.text}</span>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Todo;