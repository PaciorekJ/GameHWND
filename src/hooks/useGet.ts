import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface GetResponse<T> {
	count: number;
	results: T[];
}

function useGet<Data> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {
    const [data, setData] = useState<Data[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

    const controller = new AbortController();

	useEffect(() => {
		setLoading(true);

		apiClient
			.get<GetResponse<Data>>(endpoint, { ...requestConfig })
			.then((res) => {
				setData(res.data.results);
			})
			.catch((e) => {
                if (e instanceof CanceledError) return;
				setError(e.message);
			}).finally(() => {
				setLoading(false);
			});

        return () => controller.abort();
	}, deps ? [...deps]: []);

    return {data, error, isLoading}
}

export default useGet;