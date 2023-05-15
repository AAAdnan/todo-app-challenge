import React, { useContext, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
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
              {state.todos.map((todo, index) => (
                <Todo
                  key={index}
                  todo={todo}
                  id={index}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                />
              ))}
            </tbody>
          </Table>
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


export default TodoList;
