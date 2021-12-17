import React, { useState } from "react";
import Icon from "./Icon";

export default function NavMobile() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className="nav__left--mobile"
      data-show-menu={showMenu}
      data-dark-mode={darkMode}
    >
      {/* Controllers */}
      <Icon
        src={darkMode ? "moon-dark.svg" : "moon.svg"}
        alt="dark-mode"
        className="toggle-dark-mode"
        onClick={() => setDarkMode((state) => !state)}
      />
      <Icon
        src={showMenu ? "cross.svg" : "menu.svg"}
        alt="menu"
        onClick={() => setShowMenu((state) => !state)}
      />
      <div className="menu-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <Icon src="search.svg" alt="search" />
        </div>
        {/* Nav list */}
        <ul className="nav__list">
          <li>Home</li>
          <li>Vape</li>
          <li>E-juice</li>
          <li>Accessories</li>
        </ul>
        {/* Account Panel */}
      </div>
    </div>
  );
}
