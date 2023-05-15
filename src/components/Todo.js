import React from 'react';
import styled from 'styled-components';

const Todo = ({ todo, id, handleDelete, handleComplete }) => {
  const handleCheckboxChange = () => {
    handleComplete(id);
  };

  return (
    <TodoItem>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
    </TodoItem>
  );
};

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const TodoText = styled.span`
  flex-grow: 1;
  color: ${({ completed, theme }) => (completed ? theme.primaryColor : 'inherit')};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  margin: auto;
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

export default Todo;