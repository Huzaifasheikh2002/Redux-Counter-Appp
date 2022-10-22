import { createStore} from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducer from "./Reducers/combineReducer";
// import { counterReducer } from "./Reducers/CounterReducer";


const store = createStore(combineReducer,{},applyMiddleware(thunk));

export default store;