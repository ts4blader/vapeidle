import { useEffect } from "react";
import useAuth from "./useAuth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./useFirebase";
import { useStore, ACTION } from "../store";

export default function useCart() {
  const { user } = useAuth();
  const [state, dispatch] = useStore();

  useEffect(() => {
    // Check user
    if (user === null) return;

    async function getData() {
      const myDoc = await getDoc(doc(db, "userCarts", user.uid));
      if (myDoc.exists()) {
        dispatch({ type: ACTION.SET_CART, payload: myDoc.data().myCart });
      } else {
        console.log("No such document");
      }
    }

    getData();
  }, [user]);

  //*   Add
  const addProduct = (id, quantity, color) => {
    let cartItem = {
      id: id + color,
      quantity,
      color,
      productId: id,
    };

    // Check existed index
    let itemIndex = state.myCart.findIndex((item) => item.id === cartItem.id);
    // if exist
    if (itemIndex !== -1) {
      let myCart = state.myCart;
      myCart[itemIndex].quantity += quantity;
      setDoc(doc(db, "userCarts", user.uid), {
        myCart: myCart,
      }).then(() => {
        dispatch({ type: ACTION.SET_CART, payload: myCart });
        // set notification
        dispatch({
          type: ACTION.SET_NOTIFICATION_MESSAGE,
          payload: "Added to existed item",
        });
      });
      // if it not exist
    } else {
      let myCart = [...state.myCart, cartItem];

      setDoc(doc(db, "userCarts", user.uid), {
        myCart: myCart,
      }).then(() => {
        dispatch({ type: ACTION.SET_CART, payload: myCart });
        // set notification
        dispatch({ type: ACTION.SET_NOTIFICATION_MESSAGE, payload: "Added" });
      });
    }
  };
  //*   Remove
  const removeProduct = (id, color) => {};

  return { addProduct, removeProduct };
}
