import { combineReducers } from 'redux'
import { addCounterReducer,MinusCounterReducer } from './CounterReducer'
const combineReducer =  combineReducers({
    addCounterReducer :addCounterReducer, 
    MinusCounterReducer:MinusCounterReducer,
})  

export default combineReducer;