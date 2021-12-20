import React, { useState } from "react";
import Icon from "./Icon";

export default function TextInput({ icon, type = "text", ...restProps }) {
  const [showPass, setShowPass] = useState(false);
  const isPass = type === "password";

  return (
    <div className="text-input">
      <Icon src={icon} alt="" />
      <input type={showPass ? "text" : type} {...restProps} />
      {isPass && (
        <div
          className="reveal-btn"
          onMouseDown={() => setShowPass(true)}
          onMouseUp={() => setShowPass(false)}
        >
          <Icon src="eye.svg" alt="eye" />
        </div>
      )}
    </div>
  );
}
