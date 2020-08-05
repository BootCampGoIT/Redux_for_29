
import types from './todoTypes';

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case types.addNewTask:
            return [...state, action.payload]
        case types.deleteTask:
            return [...state.filter(task => task.id !== action.payload)]
        default:
            return state;
    }
}

export default todoReducer;