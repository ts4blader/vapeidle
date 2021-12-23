import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants/products";
import ProductFrame from "../components/ProductFrame";

export default function ProductDetail() {
  const { slug } = useParams();
  const data = useMemo(() => {
    return PRODUCTS.filter((item) => item.slug === slug)[0];
  }, [slug]);

  return (
    <main className="product-detail-page container" id={data.id}>
      <ProductFrame data={data} />
    </main>
  );
}
