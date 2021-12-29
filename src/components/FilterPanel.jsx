import React, { useState, useRef } from "react";
import { CATEGORIES } from "../constants/base";

const SPACER = 20;

export default function FilterPanel() {
  const mainBar = useRef(null);

  const [category, setCategory] = useState(CATEGORIES[0]);

  const [min, setMin] = useState(0);

  const [max, setMax] = useState(100);

  const [draggable, setDraggable] = useState(false);

  const dragHandle = (e) => {
    if (draggable) {
      let left = mainBar.current.getBoundingClientRect().left;
      let width = mainBar.current.clientWidth;
      let percent = ((e.clientX - left) / width) * 100;
      if (percent >= 0 && percent < max - SPACER) {
        setMin(Math.ceil(percent));
      }
      if (percent <= 100 && percent > min + SPACER) {
        setMax(Math.ceil(percent));
      }
    }
  };

  return (
    <div
      className="filter-panel"
      onMouseMove={dragHandle}
      onMouseUp={() => setDraggable(false)}
    >
      {/* Categories Entry */}
      <div className="filter-panel__entry">
        <div className="title">Categories</div>
        <ul className="options">
          {CATEGORIES.map((item) => (
            <li
              onClick={() => setCategory(item)}
              data-active={item === category ? true : false}
            >
              <div className="square"></div>
              <div className="label">{item}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* Price Range Input Entry */}
      <div className="filter-panel__entry">
        <div className="title">Price</div>
        <div className="range">
          <div className="price-row">
            <div className="min-price">0$</div>
            <div className="max-price">2000$</div>
          </div>
          <div className="main-bar" ref={mainBar}>
            {/* Price bar */}
            <div className="price-bar"></div>
            {/* Min controller */}
            <div
              data-drag={draggable}
              className="min-controller controller"
              onMouseDown={(e) => setDraggable(true)}
              style={{ left: `${min}%` }}
            >
              <div className="tooltip">{Math.ceil((min * 2000) / 100)}</div>
            </div>
            {/* Max controller */}
            <div
              data-drag={draggable}
              className="max-controller controller"
              onMouseDown={(e) => setDraggable(true)}
              style={{ left: `${max - 3}%` }}
            >
              <div className="tooltip">{Math.ceil((max * 2000) / 100)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
