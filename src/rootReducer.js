import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
})

export default rootReducer;