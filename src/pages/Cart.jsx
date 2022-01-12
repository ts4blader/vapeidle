import React, { useMemo, useState, useEffect } from "react";
import { useAuth } from "../store/useAuth";
import { PRODUCTS } from "../constants/products";
import Counter from "../components/Counter";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import CartHelper from "../libs/CartHelper";

const CartItem = ({ data }) => {
  const history = useHistory();
  const { name, price, img, slug } = data.data;
  const { color, quantity, id } = data;

  const [counter, setCounter] = useState(quantity);

  const { removeProduct, updateProduct } = CartHelper();

  useEffect(() => {
    updateProduct(id, counter);
  }, [counter]);

  return (
    <div className="cart-item">
      <div
        className="cart-item__preview"
        onClick={() => history.push(`/products/${slug}`)}
      >
        <img src={img} alt={name} />
      </div>
      <div className="cart-item__info">
        <div className="name">{name}</div>
        <div className="price">{price + "$"}</div>
        <div className="controller">
          {/* Quantity controller */}
          <div className="quantity-controller">
            <Counter counter={counter} setCounter={setCounter} />
          </div>
          {/* Color controller */}
          <div
            className="color-controller"
            style={{ backgroundColor: color }}
          ></div>
          {/* Remove button */}
          <div className="remove-controller" onClick={() => removeProduct(id)}>
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Cart() {
  const { cart } = useAuth();
  const history = useHistory();

  const myCart = useMemo(() => {
    return cart.map((item) => {
      // Get data from constant
      let cartItem = PRODUCTS.filter(
        (element) => item.productId === element.id
      )[0];

      return { ...item, data: cartItem };
    });
  }, [cart]);

  const total = useMemo(() => {
    return {
      item: myCart.reduce((sum, item) => sum + item.quantity, 0),
      price: myCart.reduce(
        (sum, item) => sum + item.data?.price + item.quantity,
        0
      ),
    };
  }, [cart]);

  const isEmpty = cart.length === 0;

  return (
    <main className="cart-page">
      <div className="container">
        <div className="cart-page__top">
          <h3>My Cart</h3>
        </div>

        {isEmpty ? (
          <div className="no-item">Add an item into your cart</div>
        ) : (
          <ul className="cart__list">
            {myCart.map((item) => (
              <li className="cart__item" key={`${item.id}`}>
                <CartItem data={item} />
              </li>
            ))}
          </ul>
        )}

        {!isEmpty && (
          <div className="total-row">
            <div className="header-row">
              <div className="items">Amount</div>
              <div className="prices">Total</div>
            </div>
            <div className="value-row">
              <div className="items">{total.item}</div>
              <div className="prices">{total.price + "$"}</div>
            </div>
          </div>
        )}

        {isEmpty ? (
          <div className="btn-panel">
            <Button
              img="cart.svg"
              text="Go back to shop"
              variant="bordered-blacked"
              action={() => history.push("/products")}
            />
          </div>
        ) : (
          <div className="btn-panel">
            <Button
              img="cart.svg"
              variant="bordered-blacked"
              action={() => history.push("/products")}
            />
            <Button text="Payment" />
          </div>
        )}
      </div>
    </main>
  );
}
