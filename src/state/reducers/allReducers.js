import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import turnReducer from "./turnReducer";
import winnerReducer from "./winnerReducer";

const allReducers = combineReducers({
  board: boardReducer,
  turn: turnReducer,
  winner: winnerReducer,
});

export default allReducers;
