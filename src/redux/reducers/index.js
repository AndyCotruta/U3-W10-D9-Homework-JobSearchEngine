const initialState = {
  favCompanies: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  if (
    action.type === "ADD_TO_FAVOURITES" &&
    state.favCompanies.content.includes(action.payload)
  )
    return state;

  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favCompanies: {
          ...state.favCompanies,
          content: [...state.favCompanies.content, action.payload],
          //   content: state.favCompanies.content.includes(action.payload)
          //     ? state.favCompanies.content
          //     : [...state.favCompanies.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favCompanies: {
          ...state.favCompanies,
          content: state.favCompanies.content.filter((company, i) => {
            return i !== action.payload;
          }),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;