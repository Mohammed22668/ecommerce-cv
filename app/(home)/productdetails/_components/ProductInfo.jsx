import { ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import CartApis from "@/app/_utils/CartApis";
import { CartContext } from "@/app/_context/CartContext";

const ProductInfo = ({ product }) => {
  const { user } = useUser();
  const { cart, setCart } = useContext(CartContext);
  const handleAddToCart = () => {
    try {
      const data = {
        data: {
          username: user?.username,
          email: user?.primaryEmailAddress?.emailAddress,
          products: [product?.id],
        },
      };

      CartApis.addToCart(data).then((res) => {
        console.log(res.data.data);
        setCart((oldCart) => [
          ...oldCart,
          {
            id: res?.data?.data?.id,
            product,
          },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {product?.id ? (
        <div className="mt-10 ml-10">
          <h2 className="text-[20px]">{product?.attributes?.Title}</h2>
          <h2 className="text-[20px] text-gray-400">
            {product?.attributes?.category}
          </h2>
          <h2 className="text-[15px]">
            {product?.attributes?.Description[0]?.children[0].text}
          </h2>
          <h2 className="text-[32px] text-primary mt-3">
            {" "}
            {product?.attributes?.Price}
            {" $ "}
          </h2>
          <button
            onClick={handleAddToCart}
            className="flex gap-2 rounded-lg bg-secondary text-white mt-10 w-[50%] justify-center h-[50px] items-center hover:bg-teal-500"
          >
            <ShoppingCart /> Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
};

export default ProductInfo;
