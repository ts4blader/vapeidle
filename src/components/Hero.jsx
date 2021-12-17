import React from "react";
import Button from "./Button";

export default function Hero({ data, action, children, labels }) {
  const { title, subtitle, description, cta } = data;
  return (
    <div className="hero">
      {/* Labels */}
      {labels && (
        <div className="hero__labels">
          <div className="front">{labels.front}</div>
          <div className="rear">{labels.rear}</div>
        </div>
      )}
      {/* Content */}
      <div className="container">
        <div className="hero__content">
          <div className="subtitle">{subtitle}</div>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <div className="cta" onClick={action}>
            <Button text={cta} />
          </div>
        </div>
        <div className="hero__preview">{children}</div>
      </div>
    </div>
  );
}
