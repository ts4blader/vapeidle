import React, { useState } from "react";
import Pagination from "../components/Pagination";
import ProductsShow from "../components/ProductsShow";
import Icon from "./Icon";
import Dropdown from "./Dropdown";

export default function Products() {
  const [pages, setPages] = useState(1);

  return (
    <div className="products-page">
      <div className="top-panel">
        <Dropdown text="Sort">
          <li>By Price</li>
          <li>By Name</li>
          <li>By Date</li>
          <li>By Trend</li>
        </Dropdown>
        <div className="filter">
          <Icon src="filter.svg" alt="Filter" />
        </div>
      </div>
      <ProductsShow />
      <Pagination />
    </div>
  );
}
