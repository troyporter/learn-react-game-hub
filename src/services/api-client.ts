import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:'b47ccc45eb554e3c95d07c476e21e497',
    }
})
