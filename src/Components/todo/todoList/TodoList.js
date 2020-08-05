import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoListItem from './todoListItem/TodoListItem';

const TodoList = ({ tasks = [], deleteTask }) => {
    return (
        <ul>
            {tasks.map(task => <TodoListItem key={task.id} task={task} deleteTask={deleteTask} />)}
        </ul>

    );
}

export default TodoList;