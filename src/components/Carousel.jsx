import React, { useEffect } from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import Glide from "@glidejs/glide";

export default function Carousel({
  data = [],
  title,
  img,
  action,
  id,
  options,
}) {
  useEffect(() => {
    new Glide(`#${id}`, options).mount();
  }, []);

  return (
    <div className="carousel">
      <div className="carousel__top container">
        {/* title and view all button */}
        <div className="title">
          <Icon src={img} alt="vape" />
          <div className="text">{title}</div>
        </div>
        <div className="view-btn" onClick={action}>
          <div className="text hide show-on-md">View all</div>
          <Icon src="caret.svg" alt="arrow" />
        </div>
      </div>
      <div className="carousel__middle">
        {/* Glide carousel */}
        <div className="glide" id={id}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {data.map((item) => (
                <li className="glide__slide" key={`${id}-${item.slug}`}>
                  <Link to={`/products/${item.slug}`}>
                    <img src={item.img} alt={item.name} />
                    <div className="content">
                      <div className="name">{item.name}</div>
                      <div className="price">{item.price + "$"}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
