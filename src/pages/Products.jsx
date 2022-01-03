import React, { useState, useEffect, useMemo } from "react";
import Pagination from "../components/Pagination";
import ProductsShow from "../components/ProductsShow";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import FilterPanel from "../components/FilterPanel";
import useFilter from "../libs/useFilter";

const ITEM_PER_PAGE = 8;

export default function Products() {
  const [pages, setPages] = useState(1);
  const [displayProducts, setDisplayProducts] = useState([]);
  const products = useFilter();

  const paginationLength = useMemo(() => {
    return Math.ceil(products.length / ITEM_PER_PAGE);
  }, [products]);

  useEffect(() => {
    setDisplayProducts(
      products.slice((pages - 1) * ITEM_PER_PAGE, pages * ITEM_PER_PAGE)
    );
  }, [pages, products]);

  return (
    <main className="products-page">
      <div className="container">
        <div className="top-panel">
          <Dropdown text="Sort">
            <li>By Price</li>
            <li>By Name</li>
            <li>By Date</li>
            <li>By Trend</li>
          </Dropdown>
          <button className="filter">
            <Button img="filter" />
            <FilterPanel />
          </button>
        </div>
        <ProductsShow data={displayProducts} />
        <Pagination
          action={setPages}
          active={pages}
          length={paginationLength}
        />
      </div>
    </main>
  );
}
