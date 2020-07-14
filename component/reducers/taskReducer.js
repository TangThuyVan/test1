import { ADD_NEW_CART } from '../actions/actionTypes';

const taskReducers = (task = [], action) => {
    switch (action.type) {
        case ADD_NEW_CART:
            return[
                ...task,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ]
        default:
            return task;
    }
}

export default taskReducers;