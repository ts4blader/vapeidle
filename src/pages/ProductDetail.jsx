import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants/products";
import { Link } from "react-router-dom";
import ProductFrame from "../components/ProductFrame";
import { shuffleArray } from "../libs/util";

export default function ProductDetail() {
  const { slug } = useParams();
  //* Main Product
  const data = useMemo(() => {
    return PRODUCTS.filter((item) => item.slug === slug)[0];
  }, [slug]);
  //* Relative Products
  const relativeData = useMemo(() => {
    return shuffleArray(PRODUCTS).slice(0, 3);
  }, [data]);

  return (
    <main className="product-detail-page container" id={data.id}>
      <ProductFrame data={data} />

      <div className="product-blog">
        <div className="content">
          <h2 className="title">{data.name}</h2>
          <div className="bar"></div>
          <h3>Introduce</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            mi quis dui duis velit, aliquet mi nisl. Dignissim convallis purus
            quis sit bibendum. Posuere sodales mollis id risus lacus urna,
            dictum sit consequat. Lacus, tortor quam aenean amet amet urna eget
            neque. Egestas scelerisque tempor cras feugiat
          </p>
          <p>
            Volutpat ac tortor, amet elementum lorem. Natoque turpis quam est
            quam vitae risus cursus fermentum. Eros, cras suscipit mattis
            viverra sit orci vel at. Senectus dictum elit quis integer. Metus
            integer elementum pellentesque porttitor feugiat orci. Eget in lorem
            leo pretium, varius eu, varius aliquam ullamcorper.
          </p>
          <h3>Summary</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            mi quis dui duis velit, aliquet mi nisl. Dignissim convallis purus
            quis sit bibendum. Posuere sodales mollis id risus lacus urna,
            dictum sit consequat. Lacus, tortor quam aenean amet amet urna eget
            neque. Egestas scelerisque tempor cras feugiat
          </p>
          <p>
            Volutpat ac tortor, amet elementum lorem. Natoque turpis quam est
            quam vitae risus cursus fermentum. Eros, cras suscipit mattis
            viverra sit orci vel at. Senectus dictum elit quis integer. Metus
            integer elementum pellentesque porttitor feugiat orci. Eget in lorem
            leo pretium, varius eu, varius aliquam ullamcorper.
          </p>
        </div>
        <div className="relative-products">
          <div className="title">Relative Products</div>
          <ul className="relative__list">
            {relativeData?.map((item) => (
              <li className="relative__item" key={item.id}>
                <Link to={`/products/${item.slug}`}>
                  <img src={item.img} alt="" />
                  <div className="basic">
                    <div className="name">{item.name}</div>
                    <div className="price">{item.price + "$"}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
