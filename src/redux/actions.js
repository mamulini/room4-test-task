import {
  SEARCH_ACTIVE,
  SEARCH_DEACTIVE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './types';

export const searchActivate = () => ({
  type: SEARCH_ACTIVE,
});
export const searchDeactivate = () => ({
  type: SEARCH_DEACTIVE,
});

export const fetchDataStart = () => ({
  type: FETCH_DATA_START,
});

export const fetchDataSuccess = (result) => ({
  type: FETCH_DATA_SUCCESS,
  payload: result,
});

export const fetchDataFailure = (errorMessage) => ({
  type: FETCH_DATA_FAILURE,
  payload: errorMessage,
});

export const fetchDataStartAsync = (url) => {
  return (dispatch) => {
    dispatch(fetchDataStart());

    fetch(url)
      .then((res) => res.json())
      .then((result) => dispatch(fetchDataSuccess(result)))
      .catch((error) => {
        console.log(error);
        return dispatch(fetchDataFailure(error.message));
      });
  };
};
