import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice';
import colorsReducer from './features/colorSlice';
import goodsReducer from './features/goodsSlice';
import productReducer from './features/productSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorsReducer,
  goods: goodsReducer,
  product: productReducer,
})

export default rootReducer;