"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utils/ProductApis";

const ProductSection = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then((res) => {
      setProductList(res.data.data);
    });
  };
  return (
    <div className="px-10 md:px-20">
      <h2 className="my-4 text-xl">Our Latest CV Templates</h2>
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductSection;
