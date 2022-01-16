import React from "react";
import { CATEGORIES } from "../constants/base";
import { useHistory } from "react-router-dom";

export default function NavList({ setShowMenu = () => {} }) {
  const history = useHistory();

  return (
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
  );
}
