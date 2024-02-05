import { DADOS_ABERTOS_BASE_URL } from "../constants";

/** The URL for getting all deputies */
export const GET_ALL_DEPUTIES_URL = `${DADOS_ABERTOS_BASE_URL}/deputados`

/** The URL for getting the expenses of a deputy */
export const GET_DEPUTY_EXPENSES_URL = (deputyId: number) => `${GET_ALL_DEPUTIES_URL}/${deputyId}/despesas`


/** The year from which to fetch the data */
export const YEAR = 2023;
