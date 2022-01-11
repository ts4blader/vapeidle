import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import NotFound from "./pages/404";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  //* On route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);
  //* End On route change

  return (
    <div className="app">
      <Nav />
      <Notification />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:slug" exact>
          <ProductDetail />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
