import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { Link } from "react-router-dom";

export default function Slider({ options, data = [], id }) {
  useEffect(() => {
    new Glide(`#${id}`, options).mount();
  }, []);

  return (
    <div className="slider">
      <div className="glide" id={id}>
        {/* Pagniation */}
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {data.map((item, index) => (
            <button
              key={`${item.id}-pagination`}
              className="glide__bullet"
              data-glide-dir={`=${index}`}
            ></button>
          ))}
        </div>
        {/* Slides */}
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data.map((item, index) => (
              <li className="glide__slide" key={item.id + "slider"}>
                <Link to={`/products/${item.slug}`}>
                  <img src={item.img} alt="placeholder" />
                  <div className="basic-info">
                    <div className="no">{`0${index + 1}`}</div>
                    <div className="bar"></div>
                    <div className="categories">{item.categories}</div>
                  </div>
                  <div className="name">{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
