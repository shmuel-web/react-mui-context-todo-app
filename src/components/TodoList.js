import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Checkbox, Typography } from '@mui/material';
import { useContext } from 'react';
import TodoContext from '../contexts/todo.context';
import TodoItem from './TodoItem';

function TodoList() {
    const todoContext = useContext(TodoContext);
    return (
        <div>
            <List>
                {todoContext.todos.map((todo, index) => {
                    if(todo.deleted) {
                        return null;
                    }
                    return (
                        <ListItem sx={{cursor: 'pointer'}} key={todo.id}>
                            <Checkbox
                                checked={todo.completed}
                                onChange={(e) => {
                                    const newTodos = [...todoContext.todos];
                                    newTodos[index].completed = e.target.checked;
                                    todoContext.setTodos(newTodos);
                                }}
                            />
                            <TodoItem todo={todo} />
                        </ListItem>
                    );
                })
                }
            </List>
        </div>
    );
}

export default TodoList;