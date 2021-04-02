import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk";
import postsReducer from "./posts-reducer";


let reducers = combineReducers({
    postsPage: postsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;

export default store;