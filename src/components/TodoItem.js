import { Typography, Box, Fab } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import TodoContext from '../contexts/todo.context';
import Delete from '@mui/icons-material/Delete';

function TodoItem ({todo}) {
    // display the todo item
    // on click turn text to contenteditable
    // on blur or enter save the changes

    // if the component isEditing is true, the text should be contenteditable on the first mount
    useEffect(() => {
        if(todo.isEditing) {
            document.querySelector('#todo-' + todo.id).focus();
        }
    });

    const todoContext = useContext(TodoContext);
    const {todos, setTodos} = todoContext;

    const saveEdit = (e) => {
        // on blur or enter save the changes
        if(e.key === 'Enter' || e.type === 'blur') {
            setIsEditing(false);
            const newTodos = [...todos];
            const index = newTodos.findIndex(t => t.id === todo.id);
            newTodos[index].title = e.target.textContent;
            setTodos(newTodos);
        }
    }

    const setIsEditing = (val) => {
        // this will add a new property to the todo item called editing
        const newTodos = [...todos];
        const index = newTodos.findIndex(t => t.id === todo.id);
        newTodos[index].isEditing = val;
        setTodos(newTodos);
    }

    const deleteTodo = () => {
        // adds a delete property to the todo item
        const newTodos = [...todos];
        const index = newTodos.findIndex(t => t.id === todo.id);
        newTodos[index].deleted = true;
        setTodos(newTodos);
    }


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
        
        }}>

            <Typography onClick={()=> setIsEditing(true)}  sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                <p id={'todo-' + todo.id } onKeyDown={saveEdit} onBlur={saveEdit}  contentEditable={todo.isEditing}>{todo.title}</p>
            </Typography>
            <Fab size="small"  sx={{background: 'red', color: 'white'}} aria-label="add">
                <Delete onClick={deleteTodo} />
            </Fab>
        </Box>
    );
}

export default TodoItem;