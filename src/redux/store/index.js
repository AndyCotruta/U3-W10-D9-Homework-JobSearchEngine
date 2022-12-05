import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../actions/searchReducer";
import mainReducer from "../reducers";

const bigReducer = combineReducers({
  favCompanies: mainReducer,
  searchResults: searchReducer,
});

const store = configureStore({ reducer: bigReducer });

export default store;
