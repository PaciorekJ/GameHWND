
import axios, { AxiosRequestConfig } from "axios";

interface GetResponse<T> {
    count: number;
    next: string | null;
    prev: string | null;
    results: T;
}

const axiosInstance = axios.create({
    params: {
        key: "7b5c4fe9580b43b58c5903aaed9b9e0c"
    },
    baseURL: "https://api.rawg.io/api",
});

class ClientService<T> {

    private endpoint = '';

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    get = (config?: AxiosRequestConfig) =>{
        return axiosInstance.get<GetResponse<T>>(this.endpoint, config)
        .then((res) => res.data);
    }
}

export default ClientService;