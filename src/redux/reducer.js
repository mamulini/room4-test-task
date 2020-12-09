import {
  SEARCH_ACTIVE,
  SEARCH_DEACTIVE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './types';

const INITIAL_STATE = {
  result: [],
  isFetching: false,
  errorMessage: '',
  searchActive: false,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case SEARCH_ACTIVE:
      return {
        ...state,
        searchActive: true,
      };
    case SEARCH_DEACTIVE:
      return {
        ...state,
        searchActive: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
