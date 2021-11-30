import { applyMiddleware, combineReducers, createStore } from "redux";
import reducer from './reducer'
import thunk from 'redux-thunk'

//绑定所有reducer，注意这是一个函数
const allReducer = combineReducers({
    stateChange:reducer
})

export default createStore(allReducer, applyMiddleware(thunk))