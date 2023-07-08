import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice';
import colorsReducer from './features/colorSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  colorsList: colorsReducer,
})

export default rootReducer;