import Image from "next/image";
import React from "react";

const ProductBanner = ({ product }: any) => {
  return (
    <div>
      {product?.attributes?.img?.data?.attributes?.url ? (
        <Image
          src={product?.attributes?.img?.data?.attributes?.url}
          alt="product Details"
          width={400}
          height={400}
          className="rounded-lg"
        />
      ) : (
        <div className="w-[400px] h-[400px] bg-slate-200 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
};

export default ProductBanner;
