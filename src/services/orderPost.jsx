import axios from "axios";

const orderPost = axios.create({
    baseURL: "http://localhost:3000/menu/orders"
});

export default orderPost;
