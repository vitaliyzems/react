import * as types from "./actionTypes";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_START:
    case types.SIGNIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.SIGNUP_ERROR:
    case types.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
