import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Icon from "./Icon";
import Badge from "./Badge";
import Button from "./Button";
import { useAuth } from "../store/useAuth";
import { useHistory } from "react-router-dom";

export default function NavDesktop() {
  const { user, cart } = useAuth();
  const [searchShow, setSearchShow] = useState(false);
  const history = useHistory();

  return (
    <div className="nav-desktop hide show-on-lg">
      <div className="search-panel">
        <Icon
          src={searchShow ? "cross.svg" : "search.svg"}
          alt="search-icon"
          onClick={() => setSearchShow((state) => !state)}
        />
        {searchShow && <SearchBar />}
      </div>
      {user ? (
        <button className="user-panel">
          <div className="user__avatar" title={user.displayName}>
            <Icon src={`user/${user.photoURL}`} alt={user.displayName} />
          </div>
          <ul className="user__option">
            <li onClick={() => history.push("/cart")} className="cart-option">
              <Icon src="cart.svg" alt="cart" />
              <Badge text={cart.length} />
            </li>
            <li>
              <Icon src="logout.svg" alt="logout" />
            </li>
          </ul>
        </button>
      ) : (
        <Button text="Login" action={() => history.push("/login")} />
      )}
    </div>
  );
}
