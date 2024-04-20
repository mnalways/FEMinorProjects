import React from "react";
import Products from "./Products";
import Pagination from "./Pagination";

const ProductList = ({
  products,
  totalPages,
  currentPage,
  setCurrrentPage,
}) => {
  return (
    <div>
      <Products products={products} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrrentPage={setCurrrentPage}
      />
    </div>
  );
};

export default ProductList;
