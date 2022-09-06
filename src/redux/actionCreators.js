import * as types from "./actionTypes";
import { auth } from "../services/firebase";

const signupStart = () => ({
  type: types.SIGNUP_START,
});

const signupSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});

const signupError = (error) => ({
  type: types.SIGNUP_ERROR,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginError = (error) => ({
  type: types.LOGIN_ERROR,
  payload: error,
});

export const logoutStart = () => ({
  type: types.LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logoutError = (error) => ({
  type: types.LOGOUT_ERROR,
  payload: error,
});

export const signupInitiate = (email, password, displayName) => {
  return (dispatch) => {
    dispatch(signupStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(signupSuccess(user));
      })
      .catch((error) => dispatch(signupError(error)));
  };
};

export const loginInitiate = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginError(error)));
  };
};

export const logoutInitiate = () => {
  return (dispatch) => {
    dispatch(logoutStart());
    auth
      .signOut()
      .then(() => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutError(error)));
  };
};
