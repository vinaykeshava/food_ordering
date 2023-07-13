import axios from "axios";

const getMenu = axios.create({
    baseURL: "http://localhost:3000/menu/getItems"
});

export default getMenu;
