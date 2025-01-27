import axiosClient from "./axiosClient";

const getLatestProducts = () => axiosClient.get("/Products?populate=*");
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);
const getProductByCategory = (category) => {
  return axiosClient.get(
    `/products?filters[category][id][$eq]=${category}&populate=*`
  );
};

export default {
  getLatestProducts,
  getProductById,
  getProductByCategory,
};
