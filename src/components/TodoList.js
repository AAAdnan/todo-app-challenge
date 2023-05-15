import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TodoContext } from '../context/todo';
import AddTodo from './AddTodo';
import Todo from './Todo';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [filter, setFilter] = useState("all");


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


  const filteredTodos = state.todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return todo.completed;
    } else {
      return !todo.completed;
    }
  });

  return (
    <ThemeProvider theme={vapourwaveTheme}>
    <Layout>
      <Container>
        <Heading>TodoList</Heading>
        <Subtitle>Number of tasks remaining: {remainingTasks.length}</Subtitle>
        <Table>
          <thead>
            <tr>
              <TableHeader>Task</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
          {filteredTodos.map((todo, index) => (
            <tr key={index}>
              <Todo
                key={index}
                todo={todo}
                id={index}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
              />
            </tr>
          ))}
        </tbody>
        </Table>
        <FilterButtons>
          <Button onClick={() => setFilter("all")} active={filter === "all"}>
            All
          </Button>
          <Button
            onClick={() => setFilter("completed")}
            active={filter === "completed"}
          >
            Completed
          </Button>
          <Button
            onClick={() => setFilter("active")}
            active={filter === "active"}
          >
            Active
          </Button>
        </FilterButtons>
        <AddTodo />
      </Container>
    </Layout>
    </ThemeProvider>
  );
};

const vapourwaveTheme = {
  heading: '#FFFFFF',
  primaryColor: '#cc99ff',
  secondaryColor: '#ff66cc',
  backgroundColor: '#552288',
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Container = styled.div`
  width: 600px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 10px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.heading};
  text-align: center;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.heading};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
  text-align: center;
`;

const TableRow = styled.tr`
  display: flex;
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem;
`;

export default TodoList;
