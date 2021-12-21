import React, { useState } from "react";
import Icon from "./Icon";

export default function TextInput({
  register,
  name,
  error,
  icon,
  type = "text",
  ...restProps
}) {
  const [showPass, setShowPass] = useState(false);
  const isPass = type === "password";

  return (
    <div className="text-input">
      {error && <div className="error-msg">{error}</div>}
      <Icon src={icon} alt="" />
      <input
        type={showPass ? "text" : type}
        {...register(name)}
        {...restProps}
      />
      {isPass && (
        <div
          className="reveal-btn"
          onClick={() => setShowPass((state) => !state)}
        >
          <Icon src={showPass ? "no-eye.svg" : "eye.svg"} alt="eye" />
        </div>
      )}
    </div>
  );
}
