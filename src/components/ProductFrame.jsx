import React, { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";

const ImagesShow = ({ imgs, slug }) => {
  const [select, setSelect] = useState(imgs[0]);

  return (
    <div className="images-show">
      <div className="big">
        <img src={select} alt={slug} />
      </div>
      <div className="small">
        {imgs.map((item) => (
          <div className="preview" onClick={() => setSelect(item)}>
            <img src={item} alt="placeholder" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductInfo = ({ data }) => {
  const { name, price, colors } = data;

  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState(false);

  return (
    <div className="product-info">
      {/* Basic */}
      <div className="basic-info info">
        <div className="title">{name}</div>
        <div className="price">{price + "$"}</div>
      </div>
      {/* Colors */}
      <div className="colors-info info">
        <div className="title">Colors</div>
        <ul className="colors">
          {colors.map((item) => (
            <li style={{ background: item }}></li>
          ))}
        </ul>
      </div>
      {/* Quantity */}
      <div className="quantity-info info">
        <div className="title">Quantity</div>
        <div className="pagination">
          <div
            className="pagination__start controller"
            onClick={() => {
              if (counter !== 1) setCounter(counter - 1);
            }}
          >
            <Icon src="minus-dark.svg" alt="-" />
          </div>
          <ul className="pagination__list">
            <li>{counter}</li>
          </ul>
          <div
            className="pagination__end controller"
            onClick={() => setCounter(counter + 1)}
          >
            <Icon src="add-dark.svg" alt="+" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductFrame({ data }) {
  return (
    <div className="product-frame">
      {/* Image show */}
      <ImagesShow imgs={data.imgs} slug={data.slug} />
      <ProductInfo data={data} />
      <Button text="Add to Cart" />
    </div>
  );
}
