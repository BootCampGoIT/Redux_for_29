
import types from './todoTypes';

const addNewTask = (task) => {
    return {
        type: types.addNewTask,
        payload: task
    }
}

const deleteTask = (e) => {
    const id = e.target.id
    return {
        type: types.deleteTask,
        payload: id
    }
}
export { addNewTask, deleteTask }

