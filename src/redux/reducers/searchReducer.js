import { ADD_SEARCH_RESULTS, CHANGE_SEARCH_IS_LOADING } from "../actions";

const initialState = {
  content: [],
  isLoading: true,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_RESULTS:
      console.log("Adding search results", state, action.payload);
      return {
        ...state,
        content: [...action.payload],
      };

    case CHANGE_SEARCH_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
