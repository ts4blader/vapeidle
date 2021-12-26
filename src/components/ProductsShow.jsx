import React from "react";
import { Link } from "react-router-dom";

export default function ProductsShow({ data }) {
  return (
    <div className="products-show">
      <ul className="products__list">
        {data?.map((item) => (
          <li key={`products-show-${item.id}`}>
            <Link to={`/products/${item.slug}`}>
              <img src={item.img} className="thumbnail" alt={item.name} />
              <h3 className="name">{item.name}</h3>
              <div className="price">{item.price + "$"}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
