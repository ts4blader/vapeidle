import React from "react";

function Icon({ src, alt = "", onClick }) {
  return (
    <div className="icon" onClick={onClick}>
      <img src={`/icons/${src}`} alt={alt} />
    </div>
  );
}

export default Icon;
