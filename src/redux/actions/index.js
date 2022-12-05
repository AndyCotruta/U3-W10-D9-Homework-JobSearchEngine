export const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS";
export const ADD_JOBS = "ADD_JOBS";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const handleSubmitAction = (e, baseEndpoint, query) => {
  return async (dispatch, getState) => {
    e.preventDefault();
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: ADD_SEARCH_RESULTS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobsAction = (baseEndpoint, params) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: ADD_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToFavourites = (companyName) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: companyName,
  };
};

export const removeFromFavourites = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i,
  };
};
