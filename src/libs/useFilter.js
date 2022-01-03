import { useState, useEffect } from "react";
import { PRODUCTS } from "../constants/products";
import useQuery from "./useQuery";

export default function useFilter() {
  const [data, setData] = useState([]);
  const query = useQuery();

  useEffect(() => {
    let result = PRODUCTS;
    //* URL Search param
    let search = query.get("s");
    let category = query.get("category");
    let min = query.get("min");
    let max = query.get("max");
    // SearchTerm
    if (search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search)
      );
    }
    // Categories
    if (category) {
      //* Check all categories
      if (category !== "all") {
        result = result.filter((item) => item.categories === category);
      }
    }
    // Min price
    if (min) result = result.filter((item) => item.price >= min);
    //Max price
    if (max) result = result.filter((item) => item.price <= max);

    setData(result);
  }, [query]);

  return data;
}
