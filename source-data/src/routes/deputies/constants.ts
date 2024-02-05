import { DADOS_ABERTOS_BASE_URL } from "../constants";

/** The URL for getting all deputies */
export const GET_ALL_DEPUTIES_URL = `${DADOS_ABERTOS_BASE_URL}/deputados`

/** The URL for getting the expenses of a deputy */
export const GET_DEPUTY_EXPENSES_URL = (deputyId: number) => `${GET_ALL_DEPUTIES_URL}/${deputyId}/despesas`


/** The year from which to fetch the data */
export const YEAR = 2023;

/** Map from a number to a string representatin of a month */
export const MONTH_NUMBER_TO_STRING: Record<string, string> = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december',
};