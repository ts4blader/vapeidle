import React from "react";

export default function Badge({ text, variant = "origin" }) {
  return (
    <div className="badge" data-variant={variant}>
      {text}
    </div>
  );
}
