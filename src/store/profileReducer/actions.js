import { onValue, ref } from "firebase/database";
import { auth, db } from "../../services/firebase";
import * as types from "./actionTypes";

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

const signinStart = () => ({
  type: types.SIGNIN_START,
});

const signinSuccess = (user) => ({
  type: types.SIGNIN_SUCCESS,
  payload: user,
});

const signinError = (error) => ({
  type: types.SIGNIN_ERROR,
  payload: error,
});

const signoutStart = () => ({
  type: types.SIGNOUT_START,
});

const signoutSuccess = () => ({
  type: types.SIGNOUT_SUCCESS,
});

const signoutError = (error) => ({
  type: types.SIGNOUT_ERROR,
  payload: error,
});

const writeUser = (user) => {
  const { email, uid, displayName } = user;
  const usersRef = ref(db, "users");
  onValue(usersRef, (snapshot) => {
    if (snapshot.val()?.hasOwnProperty(`${uid}`)) {
      return;
    }
    db.ref(`users/${uid}`).set({ email, displayName }, (err) =>
      console.log(err)
    );
  });
};

export const signinInitiate = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(signinStart());
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      await dispatch(signinSuccess(user));
      writeUser(user);
    } catch (error) {
      dispatch(signinError(error));
    }
  };
};

export const signupInitiate = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch(signupStart());
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await user.updateProfile({ displayName: name });
      writeUser(user);

      dispatch(signupSuccess(user));
    } catch (error) {
      dispatch(signupError(error));
    }
  };
};

export const signoutInitiate = () => {
  return async (dispatch) => {
    try {
      dispatch(signoutStart());
      await auth.signOut();
      dispatch(signoutSuccess());
    } catch (error) {
      dispatch(signoutError(error));
    }
  };
};
