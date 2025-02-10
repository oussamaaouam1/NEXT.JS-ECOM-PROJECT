const { default: axiosClient } = require("./axiosClient");




const createOrder = (orderData) => axiosClient.post("/orders", orderData);
// const addToCart = (payload) => axiosClient.post("/carts", payload);



export default {createOrder}