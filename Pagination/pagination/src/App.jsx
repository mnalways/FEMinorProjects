/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
const LIMIT = 9;
function App() {
  const [products, setproducts] = useState([]);
  const [currentPage, setCurrrentPage] = useState(1);
  const [totalPages, setTotalpages] = useState(0);

  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        (currentPage - 1) * LIMIT
      }`
    );
    const data = await response.json();
    console.log(data);
    if (data?.products) {
      setproducts([...data?.products]);
    }
    setTotalpages(Math.ceil(data?.total / LIMIT));
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <ProductList
      products={products}
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrrentPage={setCurrrentPage}
    />
  );
}

export default App;
