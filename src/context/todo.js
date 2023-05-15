import React, { useEffect, useReducer } from 'react';

const initialState = {
  todos: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = { ...action.payload, completed: false };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload)
      };
    }
    case 'COMPLETE_TODO': {
      const { payload } = action;
      const updatedTodos = state.todos.map((todo, index) => {
        if (index === payload) {
          return { ...todo, completed: true };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos
      };
    }
    case 'SET_TODOS': {
      return {
        ...state,
        todos: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      dispatch({ type: 'SET_TODOS', payload: JSON.parse(storedTodos) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  const values = {
    state,
    dispatch
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};