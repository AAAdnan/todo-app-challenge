import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../context/todo';

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      text: todo,
      completed: false
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setTodo("");
  };

  return (
    <Form onSubmit={addTodo}>
      <Input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo..."
      />
      <Button type="submit">Add todo</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex-grow: 2;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  flex-grow: 1;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
`;