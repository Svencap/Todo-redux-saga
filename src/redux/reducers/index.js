import { combineReducers } from "redux";
import task from "./tasks";

const reducer = combineReducers({
    tasks: task,
});

export default reducer;