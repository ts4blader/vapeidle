import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import ProductsShow from "../components/ProductsShow";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import { PRODUCTS } from "../constants/products";

const ITEM_PER_PAGE = 8;
const PAGINATION_LENGTH = parseInt(PRODUCTS.length / ITEM_PER_PAGE) + 1;

export default function Products() {
  const [pages, setPages] = useState(1);
  const [products, setProducts] = useState(PRODUCTS);

  useEffect(() => {
    setProducts(
      PRODUCTS.slice((pages - 1) * ITEM_PER_PAGE, pages * ITEM_PER_PAGE)
    );
  }, [pages]);

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
          <div className="filter">
            <Button img="filter" variant="blacked" />
          </div>
        </div>
        <ProductsShow data={products} />
        <Pagination
          action={setPages}
          active={pages}
          length={PAGINATION_LENGTH}
        />
      </div>
    </main>
  );
}
