import { useState, useEffect } from "react";
import {
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch, ACTION } from "../store";
import { useHistory } from "react-router-dom";
import { app } from "./useFirebase";

export default function useAuth() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [auth, setAuth] = useState(null);
  let AUTH = getAuth(app);

  useEffect(() => {
    setAuth(AUTH);
  }, [AUTH]);

  //* Create user with mail and password

  const createUser = (
    email,
    password,
    displayName,
    onSuccess = () => {},
    onFailure = () => {}
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let random = Math.floor(Math.random() * 5 + 1);
        //* Update profile
        updateProfile(user, {
          displayName: displayName,
          photoURL: `user-${random}.png`,
        })
          .then(() => {
            // Navigate to home
            history.push("/");
          })
          .catch((error) => {
            //Set notificationMessage
            dispatch({
              type: ACTION.SET_NOTIFICATION_MESSAGE,
              payload: error.message,
            });
          });

        //* Custom function
        onSuccess();
      })
      .catch((error) => {
        const errorMessage = error.message;
        // Set notificationMessage
        dispatch({
          type: ACTION.SET_NOTIFICATION_MESSAGE,
          payload: errorMessage,
        });
        //* Custom function
        onFailure();
      });
  };

  //*Sign in with mail and password

  const signIn = (
    email,
    password,
    onSuccess = () => {},
    onFailure = () => {}
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        history.push("/");

        onSuccess();
      })
      .catch((error) => {
        const errorMessage = error.message;
        // Set notificationMessage
        dispatch({
          type: ACTION.SET_NOTIFICATION_MESSAGE,
          payload: errorMessage,
        });

        onFailure();
      });
  };

  //*  Sign in with Provider
  const signInWithProvider = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        history.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          type: ACTION.SET_NOTIFICATION_MESSAGE,
          payload: errorMessage,
        });
      });
  };

  //* Log out method

  const logOut = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        dispatch({
          type: ACTION.SET_NOTIFICATION_MESSAGE,
          payload: error.message,
        });
      });
  };

  return { auth, createUser, signIn, signInWithProvider, logOut };
}
