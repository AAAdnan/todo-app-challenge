import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../context/todo';
import AddTodo from './AddTodo';
import Todo from './Todo';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      dispatch({ type: 'SET_TODOS', payload: JSON.parse(storedTodos) });
    }
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleComplete = (id) => {
    dispatch({ type: 'COMPLETE_TODO', payload: id });
  };

  const remainingTasks = state.todos.filter((todo) => !todo.completed);

  return (
    <Layout>
      <div>
        <Heading>TodoList</Heading>
        <p>Number of tasks remaining: {remainingTasks.length}</p>
        {state.todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            id={index}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
        <AddTodo />
      </div>
    </Layout>
  );
};

export default TodoList;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #293241;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #98c1d9;
  text-align: center;
  margin-bottom: 2rem;
`;