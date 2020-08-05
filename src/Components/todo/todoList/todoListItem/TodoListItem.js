import React from 'react';

const TodoListItem = ({ task, deleteTask }) => {
    return (
        <li>
            <p>{task.name}</p>
            <button type="button" id={task.id} onClick={deleteTask}>X</button>
        </li>
    );
}

export default TodoListItem;