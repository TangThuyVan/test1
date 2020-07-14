import {ADD_NEW_CART} from './actionTypes';

let newTaskId = 0;

export const addNewTask = (inputTaskName) => {
    return{
        type: ADD_NEW_CART,
        taskID: newTaskId++,
        taskName: inputTaskName
    }
}