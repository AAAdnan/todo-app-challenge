import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/todo';

export default function AddTodo() {

    const [todo, setTodo] = useState("");
    const { dispatch } = useContext(TodoContext);

    const addTodo = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todo });
        setTodo("");
    }
 

  return (
    <form>
    <input
      type="text"
      name="todo"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    />
    <button
        onClick={addTodo}
    >Add todo 
    </button>
    </form>
  )
}
