import React from 'react';

export const Todo = ( { todo, id, handleDelete }) => {
  
  return (
    <>
    <div>
        <p>{todo.text}</p>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
    </>
  )
};
