import axios from "axios"
import { GET_ALL_DEPUTIES_URL } from "./constants";

/**
 * get a Deputy
 * 
 * @param param: the parameters to filter the deputy
 * @returns a deputy's information
 */
export const getDeputy = async ({
    id,
}: {
    /** the deputy id */
    id: number;
}): Promise<any> => axios.get(`${GET_ALL_DEPUTIES_URL}/${id}`).then((r) => r.data.dados);