import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import Button from "./Button";
import Counter from "./Counter";
import CartHelper from "../libs/CartHelper";

const ImagesShow = ({ imgs, slug }) => {
  const [select, setSelect] = useState(imgs[0]);

  useEffect(() => {
    setSelect(imgs[0]);
  }, [imgs]);

  return (
    <div className="images-show">
      <div className="big">
        <img src={select} alt={slug} />
      </div>
      <div className="small">
        {imgs.map((item) => (
          <div
            key={`small-${item}`}
            data-active={select === item ? true : false}
            className="preview"
            onClick={() => setSelect(item)}
          >
            <img src={item} alt="placeholder" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductInfo = ({ data, counter, setCounter, color, setColor }) => {
  const { name, price, colors } = data;

  //* Reset
  useEffect(() => {
    setCounter(1);
    setColor(0);
  }, [data]);

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
          {colors.map((item, index) => (
            <li
              key={`${item}-${index}`}
              onClick={() => setColor(index)}
              data-active={color === index ? true : false}
              style={{ background: item }}
            ></li>
          ))}
        </ul>
      </div>
      {/* Quantity */}
      <div className="quantity-info info">
        <div className="title">Quantity</div>
        <Counter counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
};

export default function ProductFrame({ data }) {
  const { addProduct } = CartHelper();
  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState(0);

  return (
    <div className="product-frame">
      {/* Image show */}
      <ImagesShow imgs={data.imgs} slug={data.slug} />
      <div>
        <ProductInfo
          data={data}
          counter={counter}
          setCounter={setCounter}
          color={color}
          setColor={setColor}
        />
        <Button
          text="Add to Cart"
          action={() => addProduct(data.id, counter, data.colors[color])}
        />
      </div>
    </div>
  );
}
