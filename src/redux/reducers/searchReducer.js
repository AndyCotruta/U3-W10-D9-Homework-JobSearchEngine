const initialState = {
  content: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SEARCH_RESULTS":
      console.log("Adding search results", state, action.payload);
      return {
        ...state,
        content: [...action.payload],
      };

    default:
      return state;
  }
};

export default searchReducer;
