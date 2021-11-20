import { combineReducers } from "redux";
import currentChatId from "./currentChat";

const rootReducer = combineReducers({
  currentChatId,
});

export default rootReducer;
