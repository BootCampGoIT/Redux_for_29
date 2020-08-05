import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './TodoForm.module.css'


class TodoForm extends Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addTask = (e) => {
        e.preventDefault();
        const task = {
            id: uuidv4(),
            name: this.state.name
        }
        this.props.addTask(task)
        this.setState({ name: '' })
    }

    render() {
        return (
            <form name="todoForm"
                className={css.todoForm}
                onSubmit={this.addTask}
            >
                <input
                    type="text"
                    name="name"
                    className={css.todoFormTitle}
                    placeholder="title"
                    onChange={this.handleChange}
                    value={this.state.name}
                />

                <button type="submit"
                    className={css.todoFormButton} >Add new post</button>
            </form >
        );
    }
}

export default TodoForm;