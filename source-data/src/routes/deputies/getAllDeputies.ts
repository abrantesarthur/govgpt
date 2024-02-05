import { GET_ALL_DEPUTIES_URL } from "./constants"
import { Deputy } from "./types";

import { paginate } from "../helpers/paginate";

/**
 * Get all deputies.
 * 
 * @returns a list of all deputies
 */
export const getAllDeputies = async (): Promise<Deputy[]> => paginate<Deputy>({
        url: GET_ALL_DEPUTIES_URL,
        getNextUrl: () => undefined,
        getCurrentPage: (res) => (res.data.dados as Deputy[]),
    });