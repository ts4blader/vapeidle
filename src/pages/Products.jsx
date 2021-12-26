import React, { useState, useEffect, useMemo } from "react";
import Pagination from "../components/Pagination";
import ProductsShow from "../components/ProductsShow";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import useQuery from "../libs/useQuery";
import { PRODUCTS } from "../constants/products";

const ITEM_PER_PAGE = 8;

export default function Products() {
  const [pages, setPages] = useState(1);
  const [products, setProducts] = useState(PRODUCTS);
  const [displayProducts, setDisplayProducts] = useState([]);
  const query = useQuery();

  const paginationLength = useMemo(() => {
    return Math.ceil(products.length / ITEM_PER_PAGE);
  }, [products]);

  useEffect(() => {
    setDisplayProducts(
      products.slice((pages - 1) * ITEM_PER_PAGE, pages * ITEM_PER_PAGE)
    );
  }, [pages]);

  //* Filter
  useEffect(() => {
    let result = PRODUCTS;
    if (query.get("category"))
      result = result.filter(
        (item) => item.categories === query.get("category")
      );
    if (query.get("min"))
      result = result.filter((item) => item.price >= query.get("min"));
    if (query.get("max"))
      result = result.filter((item) => item.price <= query.get("max"));

    setProducts(result);
  }, [query]);

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
