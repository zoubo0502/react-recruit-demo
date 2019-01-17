import { combineReducers } from "redux";
import { user } from "./reducers/user.redux";
import { chatuser } from "./reducers/chatuser.redux";
export default combineReducers({ user, chatuser });
