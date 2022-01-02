import React, { useEffect, useState, useRef, useMemo } from "react";
import { CATEGORIES } from "../constants/base";
import useQuery from "../libs/useQuery";
import { useHistory } from "react-router-dom";

const SPACER = 20;
const MIN_PRICE = 0;
const MAX_PRICE = 2000;

export default function FilterPanel() {
  const mainBar = useRef(null);

  const history = useHistory();
  const query = useQuery();

  const [category, setCategory] = useState(CATEGORIES[0]);

  // Min values
  const [min, setMin] = useState(0);
  const minValue = useMemo(() => {
    return Math.ceil((min * MAX_PRICE) / 100);
  }, [min]);

  // Max values
  const [max, setMax] = useState(100);
  const maxValue = useMemo(() => {
    return Math.ceil((max * MAX_PRICE) / 100);
  }, [max]);

  const [draggable, setDraggable] = useState(false);

  const dragHandle = (e) => {
    if (draggable) {
      let left = mainBar.current.getBoundingClientRect().left;
      let width = mainBar.current.clientWidth;
      //* Percent for min
      let percent = ((e.clientX - left) / width) * 100;
      //* Check valid min
      if (percent >= 0 && percent < max - SPACER) {
        setMin(Math.ceil(percent));
      }
      //* Check valid max
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
          <li
            key="all-categories"
            onClick={() => setCategory("")}
            data-active={"all" === category ? true : false}
          >
            <div className="square"></div>
            <div className="label">All</div>
          </li>
          {/* Generate categories */}
          {CATEGORIES.map((item) => (
            <li
              key={item}
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
              <div className="tooltip">{minValue}</div>
            </div>
            {/* Max controller */}
            <div
              className="max-controller controller"
              onMouseDown={(e) => setDraggable(true)}
              style={{ left: `${max - 3}%` }}
            >
              <div className="tooltip">{maxValue}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Save button */}
      <div
        className="save-btn"
        onClick={() => {
          query.set("category", category);
          query.set("min", minValue);
          query.set("max", maxValue);
          history.push(`/products?${query.toString()}`);
        }}
      >
        Save
      </div>
    </div>
  );
}
