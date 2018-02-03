import { combineReducers } from 'redux';
import mathReducer from "./number_reducer";
const rootReducer = combineReducers({
  number:mathReducer
});

export default rootReducer;
