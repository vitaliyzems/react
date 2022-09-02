import { GET_POSTS, IS_ERROR, IS_LOADING } from "./actionTypes";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      dispatch({ type: GET_POSTS, payload: data });
    } catch (error) {
      dispatch({ type: IS_ERROR, payload: error.toString() });
    }
  };
};
