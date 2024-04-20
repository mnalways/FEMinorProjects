import React from "react";

const Products = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((item) => {
          return (
            <li>
              <div>
                <img src={item?.images?.[0]} />
                <div>{item.description}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
