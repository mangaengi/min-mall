import { combineReducers } from "redux";
import productReduce from "./productReduce";

export default combineReducers({
    product: productReduce
})