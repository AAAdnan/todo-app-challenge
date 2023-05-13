import { useContext } from 'react';
import AddTodo from './AddTodo';
import { TodoContext } from "../context/todo";



export default function TodoList() {

    const { state } = useContext(TodoContext);

    console.log(state)

  return (
    <>
    <h1>TodoList</h1>
    <AddTodo />
    </>
  )
}
