import { combineReducers } from "redux";
import authReducer from "./authReducer";
import accountReducer from "./accountReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  plaid: accountReducer,
  errors: errorReducer
});
