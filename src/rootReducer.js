import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice';
import colorsReducer from './features/colorSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorsReducer,
})

export default rootReducer;