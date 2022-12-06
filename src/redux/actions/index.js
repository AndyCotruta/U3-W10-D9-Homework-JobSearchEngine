export const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS";
export const ADD_JOBS = "ADD_JOBS";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const CHANGE_SEARCH_IS_LOADING = "CHANGE_IS_LOADING";
export const CHANGE_SEARCH_IS_ERROR = "CHANGE_IS_ERROR";
export const CHANGE_JOBS_IS_LOADING = "CHANGE_JOBS_IS_LOADING";
export const CHANGE_JOBS_IS_ERROR = "CHANGE_JOBS_IS_ERROR";
export const handleSubmitAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        dispatch({
          type: CHANGE_SEARCH_IS_LOADING,
          payload: true,
        });
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: ADD_SEARCH_RESULTS,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: CHANGE_SEARCH_IS_LOADING,
            payload: false,
          });
        }, 200);
      } else {
        // dispatch({
        //   type: CHANGE_SEARCH_IS_LOADING,
        //   payload: false,
        // });
        // dispatch({
        //   type: CHANGE_SEARCH_IS_ERROR,
        //   payload: true,
        // });
      }
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: CHANGE_SEARCH_IS_LOADING,
      //   payload: false,
      // });
      // dispatch({
      //   type: CHANGE_SEARCH_IS_ERROR,
      //   payload: true,
      // });
    }
  };
};

export const getJobsAction = (baseEndpoint, params) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + params);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: ADD_JOBS,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: CHANGE_JOBS_IS_LOADING,
            payload: false,
          });
        }, 200);
      } else {
        // dispatch({
        //   type: CHANGE_JOBS_IS_LOADING,
        //   payload: false,
        // });
        // dispatch({
        //   type: CHANGE_JOBS_IS_ERROR,
        //   payload: true,
        // });
      }
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: CHANGE_JOBS_IS_LOADING,
      //   payload: false,
      // });
      // dispatch({
      //   type: CHANGE_JOBS_IS_ERROR,
      //   payload: true,
      // });
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
