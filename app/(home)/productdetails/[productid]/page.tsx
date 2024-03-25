"use client";
import Breadcrumb from "@/app/_components/Breadcrumb";
import ProductApis from "@/app/_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import ProductList from "@/app/_components/ProductList";
import { usePathname } from "next/navigation";

const page = ({ params }: any) => {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductById_();
  }, [params?.productid]);

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productid).then((res) => {
      console.log("Product details", res.data.data);
      setProductDetails(res.data.data);
      getProductListByCategory_(res?.data.data);
    });
  };

  const getProductListByCategory_ = (product: any) => {
    ProductApis.getProductsByCategory(product?.attributes?.category).then(
      (res) => {
        console.log("Product Category", res.data.data);
        setProductList(res?.data.data);
      }
    );
  };
  return (
    <div className="px-10 md:px-28 py-8">
      <Breadcrumb path={path} />

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-around mt-10 gap-5 sm:gap-0">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div>
        <h2 className="mt-24 mb-8 text-lg">Similar Product</h2>
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default page;
