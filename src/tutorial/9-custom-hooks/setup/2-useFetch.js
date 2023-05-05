import { useState, useEffect } from "react";
import { Example } from "./1-fetch-example";
const url = "https://course-api.com/javascript-stre-products";
export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  console.log(products);
  return {
    loading,
    products,
  };
};
