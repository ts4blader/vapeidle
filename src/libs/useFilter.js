import { useState, useEffect } from "react";
import { PRODUCTS } from "../constants/products";
import useQuery from "./useQuery";

export default function useFilter() {
  const [data, setData] = useState(PRODUCTS);
  const query = useQuery();

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

    setData(result);
  }, [query]);

  return data;
}
