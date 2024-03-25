import axiosClient from "./axiosClient";

const getLatestProducts = () => axiosClient.get("/products?populate=*");
const getProductById = (id: any) =>
  axiosClient.get(`/products/${id}?populate=*`);

const getProductsByCategory = (category: any) =>
  axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);
export default {
  getLatestProducts,
  getProductById,
  getProductsByCategory,
};
