import { thunk } from "redux-thunk";
import StudentReducer from "./redux/studentReducer";
import {createStore, applyMiddleware} from 'redux';

const store = createStore(StudentReducer,applyMiddleware(thunk));
// const store = createStore(StudentReducer);

export default store;