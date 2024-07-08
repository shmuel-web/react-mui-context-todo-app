import {createContext, useState} from 'react';

const TodoContext = createContext(undefined);

const getTodosFromLocalStorage = () => {
    const todos = localStorage.getItem('todos');
    debugger
    return todos ? JSON.parse(todos) : [
        {id: 1, title: 'Learn React', completed: false},
        {id: 2, title: 'Learn context-api', completed: false},
        {id: 3, title: 'Learn MUI', completed: false}
    ];
}

const setTodosToLocalStorage = (todos) => {
    if (todos.length || todos.length === 0) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState(getTodosFromLocalStorage());

    return (
        <TodoContext.Provider value={{
            todos, 
            setTodos: x => {
                setTodos(x);
                setTodosToLocalStorage(x);
            }}}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContext;