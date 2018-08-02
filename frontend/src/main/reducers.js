import {combineReducers} from 'redux'
import todoReducer from '../toDo/todoReducer';

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer