import React, { useState } from "react";
import Icon from "./Icon";
import Badge from "./Badge";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { CATEGORIES } from "../constants/base";
import useAuth from "../libs/useAuth";

export default function NavMobile() {
  const history = useHistory();
  const { user, logOut } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="nav__left--mobile" data-show-menu={showMenu}>
      {/* Controllers */}
      {user && (
        <div className="cart">
          <Icon src="cart.svg" alt="my-cart" />
          <Badge text={user.cart?.length} />
        </div>
      )}
      <Icon
        src={showMenu ? "cross.svg" : "menu.svg"}
        alt="menu"
        onClick={() => setShowMenu((state) => !state)}
      />
      <div className="menu-content">
        {/* Search Bar */}
        <SearchBar />
        {/* Nav list */}
        <ul className="nav__list">
          <li onClick={() => history.push("/")}>home</li>
          {CATEGORIES.map((item) => (
            <li
              key={`${item}_nav-mobile`}
              onClick={() => {
                history.push(`/products?category=${item}`);
                setShowMenu(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        {/* Account Panel */}
        <div className="account-panel">
          {user ? (
            <div className="account container">
              <div className="avatar">
                <Icon src={`user/${user.photoURL}`} alt="avatar" />
              </div>
              <div className="display-name">{user.displayName}</div>
              <div className="logout-btn" onClick={logOut}>
                <Icon src="logout.svg" alt="logout" />
              </div>
            </div>
          ) : (
            <Button
              text="Login"
              action={() => {
                history.push("/login");
                setShowMenu(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
