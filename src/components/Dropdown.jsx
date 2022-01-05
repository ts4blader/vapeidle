import React from "react";
import Icon from "./Icon";

export default function Dropdown({ text, children }) {
  return (
    <button className="dropdown">
      <div className="dropdown__agent">
        <div className="text">{text}</div>
        <Icon src="caret-black.svg" alt=">" />
      </div>
      <ul className="dropdown__list">{children}</ul>
    </button>
  );
}
