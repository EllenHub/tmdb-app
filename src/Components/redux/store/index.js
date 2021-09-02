import {createStore} from "redux";
import themeReducer from "../reducer/themeReducer";

export const store  = createStore(themeReducer)