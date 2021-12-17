import React from "react";

export default function SectionTitle({ text }) {
  return (
    <div className="section-title container">
      <h2 className="text">{text}</h2>
      <div className="bar"></div>
    </div>
  );
}
