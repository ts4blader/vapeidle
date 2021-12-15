import React from "react";

function Image({ src, alt = "", onClick }) {
  return (
    <div className="img" onClick={onClick}>
      <img src={`/images/${src}`} alt={alt} />
    </div>
  );
}

export default Image;
