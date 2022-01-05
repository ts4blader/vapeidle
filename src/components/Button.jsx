import React from "react";
import Icon from "./Icon";

export default function Button({
  action,
  text,
  img,
  variant = "origin",
  orient = "x",
}) {
  return (
    <div
      className="button"
      onClick={action}
      data-variant={variant}
      data-orient={orient}
    >
      {img && (
        <div className="button__img">
          <Icon src={img} alt="" />
        </div>
      )}
      {text && <div className="button__text">{text}</div>}
    </div>
  );
}
