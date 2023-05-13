import { createContext, useReducer } from 'react';

const initialState = {
    todos: []
};


const reducer = (state, action) => {
    console.log('reducer', state, action)
    switch(action.type){ 
        case "ADD_TODO": {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
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