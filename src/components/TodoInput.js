import { useState, useContext } from 'react';
import Fab from '@mui/material/Fab';
import TodoContext from '../contexts/todo.context';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';


function TodoInput() {
    const todoContext = useContext(TodoContext);
    const addTodo = (e) => {
        todoContext.setTodos([
            ...todoContext.todos,
            { id: todoContext.todos.length + 1, title: "", completed: false, isEditing: true}
        ]);
    }
  return (
    <Box sx={{
        position: 'fixed',
        bottom: '50px',
        right: '50px'
    }}>
      <Fab size="large" onClick={addTodo} color="primary" aria-label="add">
        <AddIcon/>
    </Fab>
    </Box>
  );
}

export default TodoInput;
