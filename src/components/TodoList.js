import styled from 'styled-components';
import { useContext } from 'react';
import AddTodo from './AddTodo';
import { TodoContext } from "../context/todo";

const TodoList = () => {
    const { state } = useContext(TodoContext);
  
    console.log(state)
  
    return (
      <Layout>
        <div>
          <Heading>TodoList</Heading>
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
  color: #98C1D9;
  text-align: center;
  margin-bottom: 2rem;
`;

