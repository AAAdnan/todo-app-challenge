import styled from 'styled-components';
import { useContext } from 'react';
import AddTodo from './AddTodo';
import { TodoContext } from "../context/todo";
import { Todo } from '../components/Todo';

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);

    const handleDelete = (id) => {
      dispatch({ type: 'DELETE_TODO', payload: id });
    };
  
    console.log(state.todos)
  
    return (
      <Layout>
        <div>
          <Heading>TodoList</Heading>
          <p>Number of tasks remaining: </p>
           { state.todos.map((todo, index) => (
            <Todo todo={todo} key={index} id={index} handleDelete={handleDelete} />
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
  color: #98C1D9;
  text-align: center;
  margin-bottom: 2rem;
`;

