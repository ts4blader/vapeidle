import React, { useState } from "react";
import Pagination from "../components/Pagination";
import ProductsShow from "../components/ProductsShow";

export default function Products() {
  const [pages, setPages] = useState(1);

  return (
    <div className="products-page">
      <ProductsShow />
      <Pagination />
    </div>
  );
}
