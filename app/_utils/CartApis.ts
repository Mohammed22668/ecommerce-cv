import axiosClient from "./axiosClient";

const addToCart = (payload: any) => axiosClient.post("/carts", payload);

const getUserCartItems = (email: string) =>
  axiosClient.get(
    `carts?populate[products][populate]=img&filters[email][$eq]=${email}`
  );

const deleteCartItem = (id: string) => axiosClient.delete(`carts/${id}`);
export default {
  addToCart,
  getUserCartItems,
  deleteCartItem,
};
