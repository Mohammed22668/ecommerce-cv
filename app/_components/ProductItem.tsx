import { List } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }: any) => {
  return (
    <div className="shadow-md hover:shadow-lg cursor-pointer hover:border border-teal-400 p-1 rounded-lg">
      <Image
        src={product?.attributes?.img?.data?.attributes?.url}
        alt="banner-card"
        width={400}
        height={400}
        className="rounded-t-lg h-[350px]"
      />
      <div className="flex justify-between p-3 items-center bg-gray-50 rounded-b-lg">
        <div className="">
          <h2 className="text-[12px] font-medium line-clamp-1">
            {product?.attributes.Title}
          </h2>
          <h2 className="text-[13px] text-gray-400 flex gap-1 items-center">
            <List className="w-4 h-4" />
            {product?.attributes.category}
          </h2>
        </div>
        <h2 className="">{product?.attributes.Price} $ </h2>
      </div>
    </div>
  );
};

export default ProductItem;
