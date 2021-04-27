import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import productsReducer from "./reducers/products";

const rootReducer = combineReducers({
  products: productsReducer
})

export default store = createStore(rootReducer, composeWithDevTools());