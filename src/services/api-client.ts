
import axios from "axios";

export interface GetResponse<T> {
    count: number;
    results: T;
}

export default axios.create({
    params: {
        key: "7b5c4fe9580b43b58c5903aaed9b9e0c"
    },
    baseURL: "https://api.rawg.io/api",
});

