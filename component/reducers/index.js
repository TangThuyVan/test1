import taskReducer from './taskReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    taskReducer,
})

export default allReducers;