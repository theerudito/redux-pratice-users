import { combineReducers } from "@reduxjs/toolkit";
import { resultReducer } from "./result";

export default combineReducers({
	result: resultReducer
});
