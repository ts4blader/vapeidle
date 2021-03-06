import React, { useState } from "react";
import Icon from "./Icon";
import Badge from "./Badge";
import SearchBar from "./SearchBar";
import Button from "./Button";
import NavList from "./NavList";
import { useHistory } from "react-router-dom";
import AuthHelper from "../libs/AuthHelper";
import { useAuth } from "../store/useAuth";

export default function NavMobile() {
  const history = useHistory();
  const { logOut } = AuthHelper();
  const { user, cart } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="nav-mobile hide-on-md" data-show-menu={showMenu}>
      {/* Controllers */}
      {user && (
        <div className="cart" onClick={() => history.push("/cart")}>
          <Icon src="cart.svg" alt="my-cart" />
          <Badge text={cart.length} />
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
        <NavList setShowMenu={setShowMenu} />
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
