const initialState = {
  content: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SEARCH_RESULTS":
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    default:
      return state;
  }
};

export default searchReducer;
