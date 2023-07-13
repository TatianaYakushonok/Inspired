import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice';
import colorsReducer from './features/colorSlice';
import goodsReducer from './features/goodsSlice';
import productReducer from './features/productSlice';
import favoritesSlice from './features/favoritesSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorsReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesSlice,
})

export default rootReducer;