import React, { useState, useRef } from "react";
import { CATEGORIES } from "../constants/base";

const SPACER = 20;
const MIN_PRICE = 0;
const MAX_PRICE = 2000;

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
      data-drag={draggable}
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
            <div className="min-price">{MIN_PRICE}</div>
            <div className="max-price">{MAX_PRICE}</div>
          </div>
          <div className="main-bar" ref={mainBar}>
            {/* Price bar */}
            <div
              className="price-bar"
              style={{ left: `${min}%`, width: `${max - min}%` }}
            ></div>
            {/* Min controller */}
            <div
              data-drag={draggable}
              className="min-controller controller"
              onMouseDown={(e) => setDraggable(true)}
              style={{ left: `${min}%` }}
            >
              <div className="tooltip">
                {Math.ceil((min * MAX_PRICE) / 100)}
              </div>
            </div>
            {/* Max controller */}
            <div
              className="max-controller controller"
              onMouseDown={(e) => setDraggable(true)}
              style={{ left: `${max - 3}%` }}
            >
              <div className="tooltip">
                {Math.ceil((max * MAX_PRICE) / 100)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="save-btn">Save</div>
    </div>
  );
}
