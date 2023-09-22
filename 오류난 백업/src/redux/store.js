import { createStore } from "redux";
//import thunk from "redux-thunk";
import productReduce from './reducers/productAction'


let store = createStore(productReduce)

export default store;