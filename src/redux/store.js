import * as redux from "redux";
import Reducer from "./Reducer";

const root = redux.combineReducers({ cart: Reducer });

export const store = redux.createStore(root);
