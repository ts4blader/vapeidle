import { useState, useEffect } from "react";
import {
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch, ACTION } from "../store";
import { useHistory } from "react-router-dom";
import { app, db } from "./useFirebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const github = new GithubAuthProvider();

export default function useAuth() {
  const dispatch = useDispatch();

  const history = useHistory();

  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    //* On auth change
    onAuthStateChanged(auth, (newUser) => {
      if (newUser) setUser(newUser);
      else setUser(null);
    });
  }, []);

  //* Create user with mail and password

  function createUser(
    email,
    password,
    displayName,
    onSuccess = () => {},
    onFailure = () => {}
  ) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let random = Math.floor(Math.random() * 5 + 1);

        //* add cart to firestore
        setDoc(doc(db, "userCarts", user.uid), {
          myCart: [],
        })
          .then(() => {
            //Created
          })
          .catch((error) => {
            dispatch({
              type: ACTION.SET_NOTIFICATION_MESSAGE,
              payload: error.message,
            });
          });

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
  }

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

  return { auth, user, createUser, signIn, signInWithProvider, logOut };
}

export { google, facebook, github };
