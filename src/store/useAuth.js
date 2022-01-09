import { useEffect, useState, createContext, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "../libs/FirebaseHelper";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext(null);
const auth = getAuth(app);

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //* On auth change
    onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        setUser(newUser);

        // Get Cart Item
        async function getData() {
          const myDoc = await getDoc(doc(db, "userCarts", newUser.uid));
          if (myDoc.exists()) {
            setCart(myDoc.data().myCart);
          } else {
            console.log("No such document");
          }
        }

        getData();
      } else {
        setUser(null);
        setCart([]);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, user, cart, setCart }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { Auth, useAuth };
