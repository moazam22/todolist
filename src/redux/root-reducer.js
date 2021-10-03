import { combineReducers } from "redux";
import listReducer from "./list/list.reducer";
const rootReducer = combineReducers({
	lists: listReducer,
});
export default rootReducer;
