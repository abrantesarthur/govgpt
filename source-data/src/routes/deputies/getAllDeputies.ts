import axios from "axios"
import { GET_ALL_DEPUTIES_URL } from "./constants"
import { Deputy } from "./types";

/**
 * Get all deputies.
 * 
 * @returns a list of all deputies
 */
export const getAllDeputies = async (): Promise<Deputy[]> => axios.get(GET_ALL_DEPUTIES_URL).then((r) => r.data.dados);