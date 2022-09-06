import * as types from "../actionTypes";

const initialState = {
  loading: false,
  error: null,
  currentUser: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case types.SIGNUP_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGOUT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
