import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import mainReducer from "../reducers";
import jobsReducer from "../reducers/jobsReducer";

const bigReducer = combineReducers({
  favCompanies: mainReducer,
  searchResults: searchReducer,
  jobs: jobsReducer,
});

const store = configureStore({ reducer: bigReducer });

export default store;
