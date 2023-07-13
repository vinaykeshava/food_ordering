import axios from "axios";

const orderDetails = axios.create({
    baseURL: "http://localhost:3000/menu/orders"
});

export default orderDetails;
