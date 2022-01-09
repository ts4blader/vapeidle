import { useCallback } from "react";
import { useAuth } from "../store/useAuth";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch, ACTION } from "../store";
import { useHistory } from "react-router-dom";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const github = new GithubAuthProvider();

export default function AuthHelper() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth, user } = useAuth();

  //* Create user with mail and password
  const createUser = useCallback(
    (
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
    },
    [user]
  );

  //*Sign in with mail and password

  const signIn = useCallback(
    (email, password, onSuccess = () => {}, onFailure = () => {}) => {
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
    },
    [user]
  );

  //*  Sign in with Provider
  const signInWithProvider = useCallback(
    (provider) => {
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
    },
    [user]
  );

  //* Log out method

  const logOut = useCallback(() => {
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
  }, [user]);

  return { createUser, signIn, signInWithProvider, logOut };
}

export { google, facebook, github };
