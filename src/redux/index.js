import photosReducer from "./photos";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger/src";
import modalReducer from "./modal";


const rootReducer = combineReducers({
    photos: photosReducer,
    modal: modalReducer
});

const logger = createLogger({
    diff: true,
    collapsed: true
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;