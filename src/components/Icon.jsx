import React from "react";

function Icon({ src, alt = "", onClick, className = "" }) {
  return (
    <div className={`icon ${className}`} onClick={onClick}>
      <img src={`/icons/${src}`} alt={alt} />
    </div>
  );
}

export default Icon;
