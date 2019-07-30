import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

export default combineReducers({
  plaid: accountReducer
});
