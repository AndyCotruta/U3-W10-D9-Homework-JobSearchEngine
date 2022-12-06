import { ADD_JOBS, CHANGE_JOBS_IS_LOADING } from "../actions";

const initialState = {
  content: [],
  isLoading: true,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS: {
      return {
        ...state,
        content: [action.payload],
      };
    }

    case CHANGE_JOBS_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default jobsReducer;
