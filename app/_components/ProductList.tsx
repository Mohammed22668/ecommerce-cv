import React from "react";
import ProductItem from "./ProductItem";
import Link from "next/link";

const ProductList = ({ productList }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-col-4 gap-3 shadow">
      {productList.map((item: any) => (
        <Link href={`/productdetails/${item.id}`}>
          <ProductItem product={item} key={item.id} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
