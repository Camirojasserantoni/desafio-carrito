import React from "react";
import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";

import ProductItem from "./ProductItem";

import "./Products.css";

const Products = () => {
  const { data } = useContext(dataContext);

  return (
    <div className="content">
      {data.map((product, _id) => {
        return <ProductItem key={product._id} {...product} />;
      })}
    </div>
  );
};

export default Products;
