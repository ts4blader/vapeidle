import React from "react";
import Icon from "./Icon";

export default function Dropdown({ text, children }) {
  return (
    <button className="dropdown">
      <div className="text">{text}</div>
      <Icon src="caret.svg" alt=">" />
      <ul className="dropdown__list">{children}</ul>
    </button>
  );
}
