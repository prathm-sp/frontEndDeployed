import { createStore } from "redux";
import reducer from "./Reducer";

//Creating store for storing all states of our web-application. This states are send by reducer function so we are passing it as a parameter to it.
const store = createStore(reducer);

export default store;
