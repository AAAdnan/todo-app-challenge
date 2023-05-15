import { createContext, useReducer } from 'react';

const initialState = {
    todos: []
};


const reducer = (state, action) => {
    console.log('reducer', state, action)
    switch(action.type){ 
        case 'ADD_TODO': {
            const newTodo = { ...action.payload, completed: false };
            return {
              ...state,
              todos: [...state.todos, newTodo]
            };
        }
        case "DELETE_TODO": {
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload)
            }
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
        default: {
            return state;
        }
    }
}


export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const values = {
      state,
      dispatch
    };

    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
};