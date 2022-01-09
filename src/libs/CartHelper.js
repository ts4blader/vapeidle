import { useAuth } from "../store/useAuth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./FirebaseHelper";
import { useDispatch, ACTION } from "../store";

export default function useCart() {
  const { user, cart, setCart } = useAuth();
  const dispatch = useDispatch();

  //*   Add
  const addProduct = (id, quantity, color) => {
    let cartItem = {
      id: id + color,
      quantity,
      color,
      productId: id,
    };

    // Check existed index
    let itemIndex = cart.findIndex((item) => item.id === cartItem.id);
    // if exist
    if (itemIndex !== -1) {
      // Temp var
      let myCart = cart;
      myCart[itemIndex].quantity += quantity;

      setDoc(doc(db, "userCarts", user.uid), { myCart }).then(() => {
        //set Cart
        setCart(myCart);
        // set notification
        dispatch({
          type: ACTION.SET_NOTIFICATION_MESSAGE,
          payload: "Added to existed item",
        });
      });
      // if it not exist
    } else {
      let myCart = [...cart, cartItem];

      setDoc(doc(db, "userCarts", user.uid), { myCart }).then(() => {
        setCart(myCart);
        // set notification
        dispatch({ type: ACTION.SET_NOTIFICATION_MESSAGE, payload: "Added" });
      });
    }
  };
  //*   Remove
  const removeProduct = (id, color) => {};

  return { addProduct, removeProduct };
}
