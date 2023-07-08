import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice';
import colorsReducer from './features/colorSlice';
import goodsReduser from './features/goodsSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorsReducer,
  goods: goodsReduser,
})

export default rootReducer;