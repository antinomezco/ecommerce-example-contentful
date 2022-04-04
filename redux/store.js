import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';
import { MessageBoxReducer } from './message-box.slice'
import { combineReducers } from "redux";
import { loadState } from "./browser-storage";

const reducer = combineReducers({
    cart: cartReducer,
    messageBox: MessageBoxReducer
  });

const store = configureStore({
  reducer,
  preloadedState: loadState(),
});

export default store;