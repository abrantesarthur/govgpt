import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * A helper function to paginate over a route
 * @param args - the parameters
 * @returns 
 */
export const paginate = <T>({
    url,
    options,
    getNextUrl,
    getCurrentPage,
}: {
    /** the URL where to send the request */
    url: string;
    /** the request options */
    options?: AxiosRequestConfig
    /** a function that takes in the response and returns the next url to fetch data from */
    getNextUrl: (response: AxiosResponse) => string,
    /** a function that, given the response, returns the page to be added to the results */
    getCurrentPage: (response: AxiosResponse) => T[],
}): Promise<T[]> => {
    const results: T[] = [];

    const getNextPage = (response: AxiosResponse): Promise<T[]> => {
        const nextUrl = getNextUrl(response);
        const currentPage = getCurrentPage(response);

        results.push(...currentPage);

        if(!nextUrl) {
            return Promise.resolve(results);
        }
        return axios.get(nextUrl, options).then(getNextPage);
    }

    return axios.get(url, options).then(getNextPage);
}