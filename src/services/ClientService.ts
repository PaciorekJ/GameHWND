
import axios, { AxiosRequestConfig } from "axios";

interface GetResponse<T> {
    count: number;
    results: T;
}

class ClientService<T> {
    private axiosInstance = axios.create({
        params: {
            key: "7b5c4fe9580b43b58c5903aaed9b9e0c"
        },
        baseURL: "https://api.rawg.io/api",
    });

    private endpoint = '';

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    get = (config?: AxiosRequestConfig) => {
        return this.axiosInstance.get<GetResponse<T>>(this.endpoint, config)
        .then((res) => res.data);
    }
}

export default ClientService;