import React from 'react';
import TodoForm from './todoForm/TodoForm';
import TodoList from './todoList/TodoList';
import { connect } from 'react-redux';
import { addNewTask, deleteTask } from '../../redux/todo/todoActions';

const Todo = ({ addNewTask, deleteTask, tasks }) => {
    return (
        <>
            <TodoForm addTask={addNewTask} />
            <TodoList deleteTask={deleteTask} tasks={tasks} />
        </>
    );
}


// ===========================================
const mapStateToProps = (state) => {
    return {
        tasks: state.todo
    }
}

const mapDispatchToProps = { addNewTask, deleteTask }

export default connect(mapStateToProps, mapDispatchToProps)(Todo);